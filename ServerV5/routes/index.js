
import itemRouter from './item/item';
import userRouter from './user/user';

const getItemRoutes = (app) => {
    app.use('/api/V1/item', itemRouter);
    app.use('/api/V1/user', userRouter);
};

export default getItemRoutes;