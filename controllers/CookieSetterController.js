const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    setCookie(req, res, next) {
        console.log('cookie setter 2');
        // console.log(req);
         let er_guard = {
                "ProductID": process.env.ER_Guard_Plus_ProductID
            }
        console.log(process.env.ER_Guard_Plus_ProductID);
        let json_string = JSON.stringify(er_guard);

        res.cookie('insurance', json_string)
        res.send('http://127.0.0.1:3000/#/')
    }
}