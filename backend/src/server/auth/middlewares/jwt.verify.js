import jwt from 'jsonwebtoken';
import dotenvs from '../../../config/dotenv/index.env.js';

export const verifyToken = (req, res, next) => {
    const _token = req.headers['access-token'];
    if(_token) {
        jwt.verify(_token, dotenvs.secret_key_jwt, (err, payload) => {
            if(!err) {
                req.id = payload.id;
                next();
            }else {
                res.json({auth: false, message: 'Your token is not valid'})
            }
        })
    }else {
        res.json({auth: false, message: "You don't have a access token"})
    }
};