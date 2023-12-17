const express = require('express');
const controllers = require('../controllers/shopControllers.js');

const router = express.Router();


router
    .get('/', controllers.getItems)
    .get('/item/:id', controllers.getItem)
    .post('/item/:id/add', controllers.postItem)
    .get('/cart', controllers.getCart)
    .post('/cart', controllers.postCart);


    module.exports = router;