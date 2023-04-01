const express = require('express');
const ViewsRendererController = require('../controllers/ViewsRendererController');

const ROUTER = express.Router();

ROUTER.get('/',(request ,response, next) => {
    response.send('fdgdf');
});

ROUTER.get('/er-guard', ViewsRendererController.getErGuardButton)

module.exports = ROUTER