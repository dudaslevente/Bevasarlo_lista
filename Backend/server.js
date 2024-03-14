require('dotenv').config();
const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Backend API from BSZC Türr István Technikum - 12.A szoftverfejlesztő');
});

app.get('/mock_data', (req, res)=>{
  pool.query('SELECT * FROM mock_data', function (error, results) {
    if (error) {
      res.status(500).json(error);
    }else{
      res.status(200).json(results);
    }
    
  });
});

app.listen(port, ()=>{
  console.log( `Server listening on port ${port}...`);
});
