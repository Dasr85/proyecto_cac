const express = require('express');
const controllers = require('../controllers/adminControllers.js');

const router = express.Router();


router
    .get('/', controllers.getAdmin)
    .get('/create', controllers.getCreate)
    .post('/create', controllers.postCreate)
    .get('/edit/:id', controllers.getEdit)
    .put('/edit/:id', controllers.putEdit)
    .delete('/delete/:id', controllers.deleteId);
    

    module.exports = router;