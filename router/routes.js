const express = require('express');
const CookieSetterController = require('../controllers/CookieSetterController');

const ROUTER = express.Router();

ROUTER.get('/',(request ,response, next) => {
    response.send('fdgdf');
});

ROUTER.get('/er-guard-plus', CookieSetterController.setErPlusCookie);
ROUTER.get('/er-guard', CookieSetterController.setErCookie);
ROUTER.get('/dengue', CookieSetterController.setDengueCookie);
ROUTER.get('/family-protect', CookieSetterController.setFamProtectCookie);
ROUTER.get('/family-protect-plus', CookieSetterController.setFamProtectPlusCookie);
ROUTER.get('/pinoy-protect-plus', CookieSetterController.setPinoyProtectPlusCookie);
ROUTER.get('/mediphone', CookieSetterController.setMediphoneCookie);

module.exports = ROUTER