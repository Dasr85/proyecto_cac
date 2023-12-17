const express = require('express');
const controllers = require('../controllers/mainControllers');

const router = express.Router();


router
    .get('/', controllers.getMainPage)
    .get('/home', controllers.getHomePage)
    .get('/contact', controllers.getContactPage)
    .get('/about', controllers.getAboutPage)
    .get('/faqs', controllers.getFaqsPage);


    module.exports = router;