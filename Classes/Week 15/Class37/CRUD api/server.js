const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const connectionString = require('/sec.js')


const app = express();

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

