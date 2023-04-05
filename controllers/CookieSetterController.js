const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    setErPlusCookie(req, res, next) {
        console.log('cookie setter 2');
        // console.log(req);
        let er_guard = {
            "ProductID": process.env.ER_Guard_Plus_ProductID
        }
        let json_string = JSON.stringify(er_guard);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    },

    setErCookie(req, res, next) {

        let er_guard = {
            "ProductID": process.env.ER_Guard_Plus_ProductID
        }
        let json_string = JSON.stringify(er_guard);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    },

    setDengueCookie(req, res, next) {

        let dengue = {
            "ProductID": process.env.DENGUE_ProductID
        }
        let json_string = JSON.stringify(dengue);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    },

    setFamProtectCookie(req, res, next) {

        let family_protect = {
            "ProductID": process.env.Family_Protect_ProductID
        }

        let json_string = JSON.stringify(family_protect);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    },

    setFamProtectPlusCookie(req, res, next) {

        let family_protect_plus = {
            "ProductID": process.env.Family_Protect_Plus_ProductID
        }

        let json_string = JSON.stringify(family_protect_plus);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    },

    setPinoyProtectPlusCookie(req, res, next) {

        let pinoy_protect_plus = {
            "ProductID": process.env.Pinoy_Protect_Plus_ProductID
        }

        let json_string = JSON.stringify(pinoy_protect_plus);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    },

    setMediphoneCookie(req, res, next) {

        let mediphone = {
            "ProductID": process.env.Mediphone_ProductID
        }

        let json_string = JSON.stringify(mediphone);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    }
}