
import item from './item/item';
import user from './user/user';
import login from '../authentication/login/login';
import signup from '../authentication/signup/signup';


const getItemRoutes = (app) => {
    
    app.use('/api/V1/item', item);
    app.use('/api/V1/user', user);
    app.use('/api/V1/login', login);
    app.use('/api/V1/signup', signup);

};

export default getItemRoutes;