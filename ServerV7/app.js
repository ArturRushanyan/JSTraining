import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes/index';
import logger from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import expressSession from 'express-session';
import flash from 'connect-flash';
import initPassport from './passport/init';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


mongoose.connect(config.Db.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});


initPassport(passport);
routes(app);


app.listen(config.port, () => {
  console.log('Server is up!');
});
