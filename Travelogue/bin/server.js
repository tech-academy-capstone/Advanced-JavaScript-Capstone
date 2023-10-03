const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const port = 4200;

//SUB APPS
//--------



//--------
//END SUB APPS


//MAIN APP
//--------

app.use(express.static(path.join(__dirname, '../www/main/public')));
app.get('/', (req, res) => {
    res.send('Travelogue: Missing index.html in /public');
});

//--------
//END MAIN APP


app.listen(process.env.PORT || port, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT || port}`);
});

//GLOBAL MIDDLEWARE
//--------
app.use(express.json());

// Configure CORS to allow access to all resources - should be different in prod
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//--------
//END GLOBAL MIDDLEWARE