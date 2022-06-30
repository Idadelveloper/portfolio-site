const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const Article = require('./models/article');
const dotenv = require("dotenv");
const querystring = require('querystring');

// initialize app
const app = express();
const PORT = process.env.PORT || 8000;
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

// app routes
app.get('/articles', async(req, res) => {
    // let query = {}
    // if (req.query.category) {
    //     query.category = req.query.category
    // }
    // if (req.query.keyword) {
    //     query.$or = [
    //         { "title": { $regex: req.query.keyword, $options: 'i' } },
    //         { "description": { $regex: req.query.keyword, $options: 'i' } }
    //     ]
    // }
    // const articles = await Article.find(query)
    //     .populate('category')
    //     .skip(0)
    //     .limit(9)
    //     .sort({ createdAt: 'desc' })


    // const page = parseInt(req.query.page)
    // const limit = parseInt(req.query.limit)

    // const startIndex = (page - 1) * limit
    // const endIndex = page * limit

    // const articles = await Article.find().sort({ createdAt: 'desc' })

    // const results = {}

    // if (endIndex < articles.length) {
    //     results.next = {
    //         page: page + 1,
    //         limit: limit
    //     }
    // }

    // if (startIndex > 0) {
    //     results.previous = {
    //         page: page - 1,
    //         limit: limit
    //     }
    // }

    // results.results = articles.slice(startIndex, endIndex)

    const articles = await Article.find().sort({ createdAt: 'desc' })


    res.json(articles)

})

app.get('/articles/:slug', async(req, res) => {

    const slug = req.params.slug

    const article = await Article.findOne({ slug: slug })

    res.json(article)
})