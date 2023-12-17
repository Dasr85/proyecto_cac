const express = require('express');
const controllers = require('../controllers/authControllers.js');

const router = express.Router();


router
    .get('/login', controllers.getLogin)
    .post('/login', controllers.postLogin)
    .get('/register', controllers.getRegister)
    .post('/register', controllers.postRegister)
    .get('/logout', controllers.getLogout)
    

    module.exports = router;