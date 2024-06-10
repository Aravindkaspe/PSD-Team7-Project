import express from "express";
import mongoose from "mongoose";
import { PORT, MongoURL } from "./config.js";
import contactRouter from "./routes/contactRoute.js";
import userRouter from "./routes/User.js";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/User", userRouter);

app.use(
	cors({
		"Access-Control-Allow-Origin": "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

// Middleware to log request details
app.use((req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	console.log("Body:", req.body);
	next();
});

app.use("/contact", contactRouter);

app.get("/", (req, res) => {
	return res.status(200).send("<h1>Hello, World!</h1>");
});

mongoose
	.connect(MongoURL)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Example app listening at ${PORT}`);
			console.log(`Check http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
