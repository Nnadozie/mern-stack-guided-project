const express = require('express');
const path = require('path');
const textObj = require(path.join(__dirname, '/public/text.json'));

const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send(textObj);
});


const selectNodes = (parent, type) => {
  const keys = Object.keys(parent);
  const newObj = {};
  if (keys.includes(type) && (typeof parent[type] === 'string' || Array.isArray(parent[type]))) {
    newObj[type] = parent[type];
  } else {
    if (typeof parent === 'object') {
      keys.forEach(key => {
        newObj[key] = selectNodes(parent[key], type);
      });
    }
  }
  return newObj;
}

const selectLanguage = (language) => {
  const langObject = selectNodes(textObj, language);
  return langObject;
};

app.get('/jp/ja', (req, res) => {
  res.send(selectLanguage('ja'));
});

app.get('/ng/en', (req, res) => {
  res.send(selectLanguage('en'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});