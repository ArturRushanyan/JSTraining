const Router = require('express');
const itemRepo = require('../models/item');

const getItemRoutes = (app) => {
    const router = new Router();

    router
        .get('/get/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = itemRepo.getById(id);
            res.send(result);
        })
        .get('/all', (req, res) => {
            const result = itemRepo.getAll();
            res.send(result);
        })
        .get('/remove', (req, res) => {
            itemRepo.remove();
            const result = 'Last item remove. Total count: '
                + itemRepo.Items.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const item = req.body;
            const result = itemRepo.save(item);
            res.send(result);
        });

    app.use('/item', router);
};

module.exports = getItemRoutes;
