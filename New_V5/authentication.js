import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import logUser from './models/User_Login';
import bcrypt from 'bcrypt';
import config from './config';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', (req, res, next) => {
    console.log(req.body.confirmPassword);
    if(req.body.password === req.body.confirmPassword) {
        User.find({email: req.body.email}).then(user => {
            if(user.length >=1) {
                return res.status(409).json({
                    message: 'Mail exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            confirmPassword: hash
                        });
                        user.save().then(result => {
                            console.log(result);
                            res.status(201).json({
                                message: 'User created'
                            });
                        }).catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });
                    }
                });
            }
        });
    } else {
        res.status(500).send({
            message: 'passwords does not match'
        });
    }
});

router.post('/login', (req, res, next) => {
    logUser.find({email: req.body.email})
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            if(result) {
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, config.JWT_KEY,
                {
                    expiresIn: '1h'
                });
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token

                });
            }
            return res.status(401).json({
                message: 'Auth failed'
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });    
});

module.exports = router;