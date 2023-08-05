const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(
    bodyParser.urlencoded({extended: false})
);
app.use(bodyParser.json());

// db 
const db = require('./config/keys').mongoURI;

mongoose.connect(
    db,
    {useNewUrlParser: true}
).then(() => console.log('MongoDB Connected'))
.catch(err => console.log("error in db connection", err));

const Port =  process.env.PORT || 5000;

app.listen(Port, () =>
     console.log(`Server running on port ${Port}`)
     );
