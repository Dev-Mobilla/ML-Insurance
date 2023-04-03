const dotenv = require('dotenv');

dotenv.config()

const express = require('express');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const ROUTER = require('./router/routes');

const PORT = process.env.PORT || 4000

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// allow the app to use cookieparser
// app.use(helmet({
//     contentSecurityPolicy: {
//         directives: {
//             defaultSrc: ["'self'"],
//             scriptSrc: ["'self'", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",],
//             connectSrc: ["http://127.0.0.1:3000/getMaxId", "http://127.0.0.1:4000"],

//         }
//     },
// }));

// allow the app to use cookieparser
app.use(cookieparser(process.env.COOKIE_SECRET));



// app.set("view engine", "ejs");
app.use(express.static('public'));
// render the ejs views
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, '../BUTTONS')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/ER Guard/', 'ErGuardPlus.html'));
});

app.use('/', ROUTER);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})