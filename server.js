const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const Article = require('./models/article');
const dotenv = require("dotenv");
const cors = require("cors");
const https = require('https');
const fs = require('fs');
const bodyParser = require("body-parser");

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// initialize app
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));



// connect to mongodb
const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@portfoliodb.n5g0z.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI || 'mongodb://localhost/idadelveloper', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => https.createServer(options, app)
        .listen(PORT, () => {
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