const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI);
console.log('mongoose connected');

// PARSING
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
});