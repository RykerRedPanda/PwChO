'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const DATE = new Date();

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
  var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress;
  res.send(`IP klienta to ${ip}`);
 
});

app.listen(PORT, HOST);
console.log(`Nasuchuje na porcie ${PORT}`);
console.log(`Autorem jest Michal Matula`);
console.log(`Data to ${DATE}`);

