const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
require('./routes/index')(app);
require('./routes/VersionRoutes')(app, config);

app.listen(port, () => {
  console.log('Server is up!');
});
