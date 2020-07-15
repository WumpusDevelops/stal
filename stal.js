const express = require('express');
const app = express();

app.listen(3000, () => console.log('Stal is live...'));

app.get('/', (req, res) => {
res.sendFile(__dirname + "/index.html");
});