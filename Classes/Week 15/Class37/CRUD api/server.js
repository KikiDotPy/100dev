const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const connectionString = require('./sec.js');
const app = express();

app.use(express.static('public'));

MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

app.listen(3000, () => {
    app.set('view engine', 'ejs')

    app.use(bodyParser.urlencoded({ extended : true }));

    app.get('/', (req, res) => {
        const cursor = db.collection('quotes')
            .find()
            .toArray()
            .then(result => {
                res.render('index.ejs', {quotes : result })
            })
        });

    app.post('/quotes', (req, res) => {
        quotesCollection
        .insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
        })
    });

})

