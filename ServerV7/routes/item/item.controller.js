import Item from '../../models/Item';
import errors from '../../helpers/errorMessage';

const getAll = function(req, res) {
    Item.getAll().then((items) => {
        res.status(200).json(items);
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};


const get = function(req, res) {
    Item.getById(req,res).then((item) => {
        res.status(200).json(item);
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};

const update = function(req, res) {
    Item.update( req, res).then(() => {
        res.status(200).send('OK');
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};

const create = function(req, res) {
    Item.save(req,res).then((item) => {
        res.status(200).json(item);   
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};

const remove  = function(req, res) {
    Item.remove(req,res).then(() => {
        console.log('resolve');
        res.status(200).send('Item has been deleted');
    }).catch((err) => {
        console.log('false');
        errors.sendError(res, 400, err);
    });
};

export {
    getAll,
    get,
    update,
    create,
    remove
};
