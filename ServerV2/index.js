const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.use((err, req, res, next) => {
  //console.log(err);
  res.send({error: err.message});
});

app.listen(port, () => {
  console.log('server is working!');
});
