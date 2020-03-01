const express = require('express');
const morgan = require ('morgan');
const exphbs= require('express-handlebars');

const app = express();

//setings
app.set('port',process.env.PORT || 4000);


//middlewaers


//routers


// static files

module.exports=app;