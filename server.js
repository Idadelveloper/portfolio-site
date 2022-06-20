const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

// initialize app
const app = express();
const PORT = process.env.PORT || 8000;

// Log http requests
app.use(morgan('tiny'));

// app routes
app.get('/api', (req, res) => {
    const data = {
        username: 'Idadel',
        age: 22
    }
    res.json(data)
})

app.get('/api/name', (req, res) => {
    const data = {
        username: 'Idadelphine',
        age: 22
    }
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Server is starting at ${PORT}`)
})