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

app.get('/:collection', (req, res) => {
  const { collection } = req.params;

  mng.connect()
    .then(() => {
      // User can only fetch from existing collections
      if (mng.connObj.collections.includes(collection)) {
        return collection;
      }
      throw new Error(`There is no '${collection}' collection found.`);
    })
    .then(collection => mng.connObj.db.collection(collection))
    .then(col => col.findOne())
    .then(text => res.json(text))
    .catch(err => {
      mng.close();
      res.json({ ok: false, error: err.toString() });
    });
});

app.get('/:collection/:language', (req, res) => {
  const { collection, language } = req.params;

  mng.connect()
    .then(() => {
      console.log(mng.connObj.collections);
      // User can only fetch from existing collections
      if (mng.connObj.collections.includes(collection)) {
        return collection;
      }
      throw new Error(`There is no '${collection}' collection found.`);
    })
    .then(collection => mng.connObj.db.collection(collection))
    .then(col => col.findOne())
    .then(text => selectLanguage(text, language))
    .then(text => res.json(text))
    .catch(err => {
      mng.close();
      res.json({ ok: false, error: err.toString() });
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});