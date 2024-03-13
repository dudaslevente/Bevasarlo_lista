require('dotenv').config();
const express = require('express');
var mysql = require('mysql');
const app = express();
const port = process.env.PORT;

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Backend API from BSZC Türr István Technikum - 12.A szoftverfejlesztő');
});
