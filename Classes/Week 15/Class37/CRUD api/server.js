const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const connectionString = require('./sec.js');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json())


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
                res.render('index.ejs', { quotes : result })
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

        app.put('/quotes', (req, res) => {
            quotesCollection  
            .findOneAndUpdate(
                { name: 'Yoda' },
                {
                  $set: {
                    name: req.body.name,
                    quote: req.body.quote,
                  },
                },
                {
                  upsert: true,
                }
              )
            .then(result => {
                res.json('success')
               })
            .catch(error => console.error(error))
          });
        app.delete('/quotes', (req, res) => {
            quotesCollection
            .deleteOne(
                { name: req.body.name }
            )
            .then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No quote to delete')
                }
                res.json(`Deleted Darth Vader's quote`)
              })
            .catch( error => { console.log(error) })
        })
        
    });

})

