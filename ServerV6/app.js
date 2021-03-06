
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes/index';
import logger from 'morgan';


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

routes(app);


app.listen(config.port, () => {
  console.log('Server is up!');
});
