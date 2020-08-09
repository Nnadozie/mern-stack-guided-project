const path = require('path');
const { MongoClient } = require('mongodb');
const selectLanguage = require('./selectLanguage');
const { URL, DBNAME } = require('./dbSettings');
const textObj = require(path.join(__dirname, '../public/text.json'));
const connObj = {
  client: null,
  db: null,
  collections: null
};

/**
 * connect to the mongodb database using the provided parameters
 */
async function connect() {
  // if we are already connected 
  // no need to reconnect
  if (connObj.client && connObj.db) {
    return;
  }

  // connect to the local db
  // client = new MongoClient(URL, { 
  //   useNewUrlParser: true, 
  //   useUnifiedTopology: true 
  // });
  try {
    connObj.client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    connObj.db = connObj.client.db(DBNAME);
  }
  catch (err) {
    console.error(err);
  }
}

/**
 * Closes mongodb connection
 */
async function close() {
  (await connObj.client).close();
}

/**
 * Return true if the mongodb contains the provided collection
 * 
 * @param {string} collName 
 */
async function hasCollection(collName) {
  if (!connObj.collections) {
    connObj.collections = (await connObj.db.listCollections().toArray())
      .map(coll => coll['name']);
  }
  return connObj.collections.includes(collName);
}

async function mongoImport(collection, data) {
  try {
    const col = await connObj.db.collection(collection);
    await col.deleteMany();
    const response = await col.insertOne(data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const importJson = async () => {
  console.log('Importing data!');
  await connect();
  let exists = await hasCollection('intl');
  if (!exists) {
    console.log('creates intl collection');
    await mongoImport('intl', { ...textObj });
  }
  exists = await hasCollection('jp');
  if (!exists) {
    console.log('creates ja collection');
    await mongoImport('jp', selectLanguage(textObj, 'ja'));
  }
  exists = await hasCollection('ng');
  if (!exists) {
    console.log('creates intl collection');
    await mongoImport('ng', selectLanguage(textObj, 'en'));
  }
  await close();
  console.log('Data import finished!')
};

module.exports = {
  importJson, 
  connect, 
  close,
  hasCollection,
  connObj
};

