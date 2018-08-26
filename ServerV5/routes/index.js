import Router from 'express';
import itemRepo from '../models/itemRepo';
import error from '../helpers/errorMessage';



const getItemRoutes = (app) => {
    const router = new Router();

    router.get('/', (req, res) => {
        res.send(itemRepo.getAll());
    }), () => {
        error(res, 400, 'Bad request');
    };

    router.get('/:id', (req,res) => {
        res.send(itemRepo.getById(req,res));
    }), () => {
        error(res, 400, 'Bad request');
    };

    router.post('/', (req, res) => {
        res.send(itemRepo.save(req,res));
    }), () => {
        error(res, 400, 'Bad request');
    };

    router.put('/:id', (req,res) => {
        res.send(itemRepo.update(req.params.id, req, res));
    }), () => {
        error(res, 400, 'Bad request');
    };
    router.delete('/:id', (req, res) => {
        res.sned(itemRepo.remove(req,res));
    }), () => {
        error(res, 400, 'Bad request');
    };

    app.use('/api/V1/item', router);
};

export default getItemRoutes;