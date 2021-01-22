const { request } = require('express');
const express = require('express');
const router = express.Router();
const datab = require('../database/config');
var dataDB = {}
const fetch = require("node-fetch");


router.get('/', async(req, res) => {
      await datab.query('SELECT * FROM datos', (err, rows, fields) => {
    if (!err) {
       res.json(rows);
    } else {
      console.log(err);
      
    }
  });
});


router.get('/:id', async(req, res) => {
  const { id } = req.params;
  await datab.query('SELECT * FROM datos WHERE Date = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

var url = 'https://webhook.site/14693700-0cce-4ef4-9961-e927cf90c008';
var data={Date: '2020-01-20' , Valor:'1.6019'}

fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


module.exports = router;
