const express = require('express');

let app = express();

app.use((req, res, next) => {
    console.log('PATH: ' + req.path);
    next();
});


app.get('/',(req, res, next) => {
    res.send('Hello');
    //res.end();
});



app.listen(8080);