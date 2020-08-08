const express = require('express');
const { MongoClient } = require('mongodb');
const selectLanguage = require('./utilities/selectLanguage');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.post('/:collection', (req, res) => {

    const url = 'mongodb://localhost:27017';
    const dbName = 'uberCloneDb';
    const payload = req.body;
    const { collection } = req.params;

    (async function mongo() {
        let client;
        try {
            client = MongoClient.connect(url);
            const db = (await client).db(dbName);
            const response = await db.collection(collection).insertOne(payload);
            res.json(response)
        } catch (error) {
            res.send(error);
            console.log(error);
        }
        (await client).close();
    })();
});

app.get('/', (req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'uberCloneDb';

    (async function mongo() {
        let client;
        try {
            client = MongoClient.connect(url);
            const db = (await client).db(dbName);
            const col = await db.collection('default');
            const text = await col.findOne()
            res.send(text);
        } catch (error) {
            res.send(error);
        }
        (await client).close();
    })();
});

app.get('/:collection/:language', (req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'uberCloneDb';
    const { country, language } = req.params;

    (async function mongo() {
        let client;
        try {
            client = MongoClient.connect(url);
            const db = (await client).db(dbName);
            const col = await db.collection(country);
            const text = await col.findOne()
            res.send(selectLanguage(text, language))
        } catch (error) {
            res.send(error);
            console.log(error);
        }
        (await client).close();
    })();
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});