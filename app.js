const express = require('express');
const { MongoClient, connect } = require('mongodb');
const selectLanguage = require('./utilities/selectLanguage');
const mng = require('./utilities/mng');


// Uncomment the following line to import data to the mongodb database
// (() => { mng.importJson(); })();


const app = express();
const port = process.env.PORT || 3000;
const { URL, DBNAME } = require('./utilities/dbSettings');


app.use(express.json());
app.put('/:collection', (req, res) => {
  const payload = req.body;
  const { collection } = req.params;

  (async function mongo() {

    let client = new MongoClient(URL, { useNewUrlParser: true });
    try {
      client = MongoClient.connect(URL);
      const db = (await client).db(DBNAME);
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
  const { collection } = req.params;

  mng.connect()
    .then(() => mng.connObj.db.collection(collection))
    .then(col => col.findOne())
    .then(text => res.json(text))
    .catch(err => {
      console.log(err);
      mng.close();
    });
});

app.get('/:collection/:language', (req, res) => {
  console.log('/:collection:language');
  const { collection, language } = req.params;

  mng.connect()
    .then(() => mng.connObj.db.collection(collection))
    .then(col => col.findOne())
    .then(text => selectLanguage(text, language))
    .catch(err => {
      console.log(err);
      mng.close();
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});