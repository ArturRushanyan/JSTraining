import  itemRepo from '../../models/itemRepo';
import errors from '../../helpers/errorMessage';

const getAll = function(req, res) {
    /*res.status((itemRepo.getAll()).then((items) => {
        res.status(200).json(items);
    }).catch((err) =>{
        errors.sendError(res, 400, err);
    })); */
    itemRepo.getAll().then((items) => {
        res.status(200).json(items);
    }).catch((err) =>{
        errors.sendError(res, 400, err);
    });
};


const get = function(req, res) {
    itemRepo.getById(req,res).then((item) => {
        res.status(200).json(item);
    }).catch(() =>{
        errors.sendError(res, 400, 'Item not found');
    });
};

const update = function(req, res) {
    
    itemRepo.update( req, res).then(() => {
        res.status(200).json('OK');
    }).catch((err) => {
        errors.sendError(res,400,err);
    });
    //res.send(itemRepo.update(req.params.id, req, res));
};

const create = function(req, res) {
    itemRepo.save(req,res).then((item) => {
        res.status(200).json(item);   
    }).catch((err) =>{
        errors.sendError(res, 400, err);
    });
};

const remove  = function(req, res) {
    itemRepo.remove(req,res).then(() => {
        res.status(200).json('OK');
    }).catch((err) =>{
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
