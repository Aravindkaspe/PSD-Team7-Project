import express from "express";
import { Contact } from "../models/Contact.js";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
	res.status(200).send("This is a contact");
});

contactRouter.post("/createcontact", async (req, res) => {
	try {
		// console.log(req.body);
		// const contact = new Contact(req.body);
		// console.log(contact);
		if (!req.body.name || !req.body.email || !req.body.phoneNumber) {
			return res.status(400).send("Please provide required information!");
		}

		const newContact = {
			name: req.body.name,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber,
		};
		if (req.body.description) {
			newContact.description = req.body.description;
		}

		const createdContact = await Contact.create(newContact);
		return res.status(201).send(createdContact);
	} catch (error) {
		console.log(error.message);
		return res.status(500).send({ message: error.message });
	}
});

export default contactRouter;
