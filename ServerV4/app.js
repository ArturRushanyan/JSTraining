
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes/index';
import vRoutes from './routes/VersionRoutes';



const app = express();
app.use(bodyParser.json());

routes(app);
vRoutes(app, config);

app.listen(config.port, () => {
  console.log('Server is up!');
});
