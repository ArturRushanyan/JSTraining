import itemRepo from '../../models/itemRepo';

const getAll = function(req, res) {
    res.send(itemRepo.getAll());
};

const get = function(req, res) {
    res.send(itemRepo.getById(req,res));
};

const update = function(req, res) {
    res.send(itemRepo.update(req.params.id, req, res));
};

const create = function(req, res) {
    res.send(itemRepo.save(req,res));
};

const remove  = function(req, res) {
    res.sned(itemRepo.remove(req,res));
};

export {
    getAll,
    get,
    update,
    create,
    remove
};
