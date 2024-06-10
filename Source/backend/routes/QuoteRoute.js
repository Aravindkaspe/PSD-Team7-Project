import express from "express";
import { Quote } from "../models/Quote.js";
import { sendEmail } from "../emailService.js";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
    res.status(200).send("This is a Quote");
});

contactRouter.post("/createQuote", async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phoneNumber) {
            return res.status(400).send("Please provide required information!");
        }

        const newContact = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            description: req.body.description,
        };

        const createdContact = await Contact.create(newContact);

        // Send an automated email
        const subject = "Thank you for contacting us!";
        const text = `Hello ${newContact.name},\n\nThank you for reaching out to us. We have received your query and will get back to you within 48 hours.\n\nBest regards,\nThe 3D Craft Company`;
        sendEmail(newContact.email, subject, text);

        return res.status(201).send(createdContact);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

export default contactRouter;
