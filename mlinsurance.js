const dotenv = require('dotenv');

dotenv.config()

const express = require('express');
const bodyParser = require('body-parser'); 
const cookieparser = require('cookie-parser');
const path = require('path');
const helmet = require('helmet');
const ROUTER = require('./router/routes');

const PORT = process.env.PORT || 4000

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// allow the app to use cookieparser
app.use(helmet());

// allow the app to use cookieparser
app.use(cookieparser());

app.set("view engine", "ejs");
// render the ejs views
app.set("views", path.join(__dirname, "views"));

app.use('/', ROUTER);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})