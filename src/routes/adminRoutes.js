const express = require('express');
const controllers = require('../controllers/adminControllers.js');
const uploadMiddleware = require('../middlewares/uploadMiddleware.js');

const router = express.Router();





router
    .get('/', controllers.getAdmin)
    .get('/create', controllers.getCreate)
    .post('/create', uploadMiddleware.array('images',2), controllers.postCreate)
    .get('/edit/:id', controllers.getEdit)
    .put('/edit/:id',  uploadMiddleware.array('images',2), controllers.putEdit)
    .delete('/delete/:id', controllers.deleteId);
    

    module.exports = router;