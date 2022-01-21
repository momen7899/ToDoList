const express = require("express");
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

const app = express();
const portNumber = 8080

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static(".." + '/public'));


app.get('/', (request, response) => {
    response.redirect('/login')
});

app.get('/login', (request, response) => {
    response.sendFile('login/index.html', { root: '../client' })
});


app.get('/main', (Request, response) => {
    response.sendFile('main/index.html', { root: '../client' })
});

app.listen(portNumber, () => {
    console.log('App Listening to port portNumber')
});

require("./routes/user.routes.js")(app);
require("./routes/note.routes.js")(app);
