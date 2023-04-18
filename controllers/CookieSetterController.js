const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    async setErPlusCookie(req, res, next) {
        // console.log(req);
        let er_guard = {
            "ProductId": process.env.ER_Guard_Plus_ProductID
        }
        let json_string = JSON.stringify(er_guard);
        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    },

    setErCookie(req, res, next) {

        let er_guard = {
            "ProductId": process.env.ER_Guard_ProductID
        }
        let json_string = JSON.stringify(er_guard);

        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    },

    setDengueCookie(req, res, next) {

        let dengue = {
            "ProductId": process.env.DENGUE_ProductID
        }
        let json_string = JSON.stringify(dengue);

        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    },

    setFamProtectCookie(req, res, next) {

        let family_protect = {
            "ProductId": process.env.Family_Protect_ProductID
        }

        let json_string = JSON.stringify(family_protect);

        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    },

    setFamProtectPlusCookie(req, res, next) {

        let family_protect_plus = {
            "ProductId": process.env.Family_Protect_Plus_ProductID
        }

        let json_string = JSON.stringify(family_protect_plus);

        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    },

    setPinoyProtectPlusCookie(req, res, next) {

        let pinoy_protect_plus = {
            "ProductId": process.env.Pinoy_Protect_Plus_ProductID
        }

        let json_string = JSON.stringify(pinoy_protect_plus);

        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    },

    setMediphoneCookie(req, res, next) {

        let mediphone = {
            "ProductId": process.env.Mediphone_ProductID
        }

        let json_string = JSON.stringify(mediphone);

        res.cookie(process.env.COOKIE_NAME, json_string, {
            path: process.env.COOKIE_PATH,
            domain: process.env.COOKIE_DOMAIN,
            httpOnly: false,
            secure: false,
            sameSite: process.env.COOKIE_SAMESITE,
            maxAge: process.env.COOKIE_MAXAGE,
        })

        res.redirect(process.env.REDIRECT_URL)
    }
}