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

app.use(express.static(path.resolve(__dirname, '../BUTTONS')))

//ER GUARD
app.get('/er-plus', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/ER Guard/', 'ErGuardPlus.html'));
});
app.get('/er', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/ER Guard/', 'ErGuard.html'));
});

//MEDICAL REIMBURSEMENT
app.get('/dengue', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/Medical Reimbursement/', 'DengueRx.html'));
});

//PERSONAL ACCIDENT
app.get('/family-protect', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/Personal Accident/', 'FamilyProtect.html'));
});
app.get('/family-protect-plus', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/Personal Accident/', 'FamilyProtectPlus.html'));
});
app.get('/pinoy-protect-plus', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/Personal Accident/', 'PinoyProtectPlus.html'));
});

//VIRTUAL INSURANCE
app.get('/mediphone', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'BUTTONS/Virtual Insurance/', 'Mediphone.html'));
});

app.use('/api', ROUTER);

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})