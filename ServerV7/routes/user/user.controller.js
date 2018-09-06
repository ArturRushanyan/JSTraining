import User from '../../models/User';
import errors from '../../helpers/errorMessage';

const getAll = function(req, res) {
    User.getAll().then((users) => {
        res.status(200).json(users);
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};


const get = function(req, res) {
    User.getById(req,res).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};

const update = function(req, res) {
    User.update( req, res).then(() => {
        res.status(200).send('OK');
    }).catch((err) => {
        errors.sendError(res, 400, err);
    });
};



export {
    getAll,
    get,
    update,
};
