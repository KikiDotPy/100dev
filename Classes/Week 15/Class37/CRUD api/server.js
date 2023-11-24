const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const connectionString = require('./sec.js');
const app = express();

MongoClient.connect(connectionString)
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

app.listen(3000, () => {

    app.use(bodyParser.urlencoded({ extended : true }));

    app.get('/', (req, res) => {
        const cursor = db.collection('quotes')
            .find()
            .toArray()
            .then(result => {
                console.log(result)
            })
        res.sendFile(__dirname + '/index.html')
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

