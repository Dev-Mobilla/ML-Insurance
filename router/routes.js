const express = require('express');
const ViewsRendererController = require('../controllers/ViewsRendererController');
const CookieSetterController = require('../controllers/CookieSetterController');

const ROUTER = express.Router();

ROUTER.get('/',(request ,response, next) => {
    response.send('fdgdf');
});

ROUTER.get('/er-guard', ViewsRendererController.getErGuardButton);
ROUTER.get('/cookie', CookieSetterController.setCookie);

module.exports = ROUTER