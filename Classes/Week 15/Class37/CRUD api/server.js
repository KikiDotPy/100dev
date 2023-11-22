import { express } from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import { connectionString } from './sec';


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

