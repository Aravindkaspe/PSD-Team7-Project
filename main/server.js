const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes
app.use('/api/customers', customerRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server started and running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    });
