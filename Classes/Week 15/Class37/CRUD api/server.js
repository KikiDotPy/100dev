const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();
const connectionString = 'mongodb+srv://yoda:star-wars23@cluster0.g4gvgme.mongodb.net/?retryWrites=true&w=majority'

app.listen(3000, () => {

    app.use(bodyParser.urlencoded({ extended : true }));

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
        });
    app.post('/quotes', (req, res) => {
        console.log(req.body)
    });

    MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
    })
    .catch(console.error)

})

