const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hells, World');
    console.log('working')
});

app.listen(PORT, () => {
    console.log(`UP AND RUNNING on port ${PORT}!`);
});