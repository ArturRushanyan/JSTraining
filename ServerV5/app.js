
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import routes from './routes/index';
import logger from 'morgan';
import dbConfig from './config/database.congig';
import mongoose  from 'mongoose';


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());




mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

routes(app);


app.listen(config.port, () => {
  console.log('Server is up!');
});
