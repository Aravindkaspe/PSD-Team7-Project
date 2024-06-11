import express from "express";
import quote from "../models/Quote.js";

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

        const createdQuote = await quote.create(newQuote);

        return res.status(201).send(createdQuote);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})


export default quoteRouter;
