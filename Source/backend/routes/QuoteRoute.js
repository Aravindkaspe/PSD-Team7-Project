import express from "express";
import { sendEmail } from "../emailService.js";
import { Quote } from "../models/Quote.js";

const quoteRouter = express.Router();

quoteRouter.post("/createquote", async (req, res)=> {
    try {
        if (!req.body.name || !req.body.email || !req.body.phoneNumber || !req.body.service|| !req.body.budget) {
            return res.status(400).send("Please provide required information!");
        }

        const newQuote = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            service: req.body.service,
            budget: req.body.budget,
            description: req.body.description,
        };

        const createdQuote = await Quote.create(newQuote);

        // Send an automated email
        const subject = "Thank you for contacting us!";
        const text = `Hello ${newQuote.name},\n\nThank you for reaching out to us. We have received your query and will get back to you within 48 hours.\n\nBest regards,\nYour Company Name`;
        // sendEmail(newContact.email, subject, text);

        return res.status(201).send(createdQuote);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})


export default quoteRouter;
