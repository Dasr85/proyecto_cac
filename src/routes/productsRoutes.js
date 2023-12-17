const express = require('express');
const controllers = require('../controllers/ProductsControllers.js');


const router = express.Router();

router
    .get('/', controllers.getProducts)
    .post('/', controllers.postProduct)

    .get('/:id', controllers.getProduct)
    .put('/:id', controllers.updProduct)
    .delete('/:id', controllers.delProduct)

    .get('/price/:precio', controllers.getProductByMinPrice)

module.exports = router;