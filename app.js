const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.get('/text', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/text.json'));
});

app.get('/jp/ja', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/text.json'));
});

app.get('/ng/en', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/text.json'));
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});