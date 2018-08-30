
import itemRouter from './item/item';



const getItemRoutes = (app) => {
    
    app.use('/api/V1/item', itemRouter);
};

export default getItemRoutes;