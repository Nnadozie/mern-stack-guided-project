const express = require('express');
const { MongoClient } = require('mongodb');
const selectLanguage = require('./utilities/selectLanguage');


const app = express();
const port = process.env.PORT || 3000;
const url = "mongodb+srv://admin:57VpzmLLKHAGdJD@uberclone.1g6uu.mongodb.net/uberCloneDb?retryWrites=true&w=majority";
const dbName = 'uberCloneDb';



app.use(express.json());
app.put('/:collection', (req, res) => {
    const payload = req.body;
    const { collection } = req.params;

    (async function mongo() {
        let client = new MongoClient(url, { useNewUrlParser: true });
        try {
            client = MongoClient.connect(url);
            const db = (await client).db(dbName);
            const col = await db.collection(collection.toString());
            await col.deleteMany();
            const response = await col.insertOne(payload);
            res.status(201).json(response)
        } catch (error) {
            res.send(error);
        }
        (await client).close();
    })();
});

app.get('/:collection', (req, res) => {
    const {collection} = req.params;

    (async function mongo() {
        let client = new MongoClient(url, { useNewUrlParser: true });
        try {
            client = MongoClient.connect(url);
            const db = (await client).db(dbName);
            const col = await db.collection(collection.toString());
            const text = await col.findOne()
            res.json(text);
        } catch (error) {
            res.send(error);
        }
        (await client).close();
    })();
});

app.get('/:collection/:language', (req, res) => {
    const { collection, language } = req.params;

    (async function mongo() {
        let client = new MongoClient(url, { useNewUrlParser: true });
        try {
            client = MongoClient.connect(url);
            const db = (await client).db(dbName);
            const col = await db.collection(collection.toString());
            const text = await col.findOne()
            res.json(selectLanguage(text, language))
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