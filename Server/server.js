const express = require("express");
const cors = require("cors");

const app = express();
const portNumber = 8080


app.get('/', (request, response) => {
    response.redirect('/login')
});

app.get('/login', (request, response) => {
    response.send('Hello World!')
});

app.get('/main', (Request, response) => {
    response.send('Main')
});

app.listen(portNumber, () => {
    console.log('App Listening to port portNumber')
});
