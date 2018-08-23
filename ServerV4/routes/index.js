import Router from 'express';
import itemRepo from '../models/item';
import idGenerator from '../helpers/idGenerator';

const getItemRoutes = (app) => {
    const router = new Router();

    router
        .get('/all', (req, res) => {
            res.send(itemRepo.getAll());
        })
        .get('/item/:id', (req, res) => {
            const id1 = parseInt(req.params.id);
            res.send(itemRepo.getById(id1));
        })
        .post('/save', (req, res) => {
            const item = {
                id: idGenerator.id(),
                type: req.body.type,
                title: req.body.title,
                price: req.body.price
            }
            const result = itemRepo.save(item);
            res.send(result);
        })
        .delete('/remove/:id', (req, res) => {
            const requestId = req.params.id;
            res.send(itemRepo.remove(requestId));
        })
        

    app.use('/api/V1', router);
};

module.exports = getItemRoutes;
