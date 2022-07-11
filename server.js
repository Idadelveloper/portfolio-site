const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const Article = require('./models/article');
const dotenv = require("dotenv");

// initialize app
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config()

// connect to mongodb
const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@portfoliodb.n5g0z.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI || 'mongodb://localhost/idadelveloper', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(PORT, () => {
        console.log(`Server is starting at ${PORT}`);
    }))
    .catch((err) => console.log(err));

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
})


// Log http requests
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'client/build')));


// app routes
app.get('/articles', async(req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.json(articles)
})

app.get('/articles/:slug', async(req, res) => {
    const slug = req.params.slug
    const article = await Article.findOne({ slug: slug })

    res.json(article)
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/home', function(req, res) {
    res.redirect('/')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})