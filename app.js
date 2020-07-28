const express = require('express');
const path = require('path');
const textObj = require(path.join(__dirname, '/public/text.json'));



const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/text.json'));
});


const deleteNodes = (parent, type) => {

    const keys = Object.keys(parent);
    if (keys.includes(type)) {
        delete parent[type];
    }
    else {
        keys.forEach(key => {
            deleteNodes(parent[`${key}`], type);
        });
    }

}

app.get('/jp/ja', (req, res) => {
    let jaObj = {};
    if (true) {
        let clone = JSON.parse(JSON.stringify(textObj));
        deleteNodes(clone, "en");
        jaObj = clone;
    }
    res.send(jaObj);

});

app.get('/ng/en', (req, res) => {
    let enObj = {};
    if (true) {
        let clone = JSON.parse(JSON.stringify(textObj));
        deleteNodes(clone, "ja");
        enObj = clone;
    }
    res.send(enObj);
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});