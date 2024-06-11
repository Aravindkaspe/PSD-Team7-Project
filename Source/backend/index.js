import express from "express";
import mongoose from "mongoose";
import { PORT, MongoURL } from "./config.js";
import contactRouter from "./routes/contactRoute.js";
import userRouter from "./routes/User.js";
import cors from "cors";
import quoteRouter from "./routes/quoteRoute.js";

const app = express();

app.options('*', cors());

// Apply CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to send cookies or other credentials
  optionsSuccessStatus: 204
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log("Body:", req.body);
  next();
});

app.use("/User", userRouter);
app.use("/contact", contactRouter);
app.use("/quote", quoteRouter);

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