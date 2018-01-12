require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')

const {
     SERVER_PORT
    , SESSION_SECRET
    , CONNECTION_STRING
} = process.env

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`listening on ${SERVER_PORT}`);
    });
})