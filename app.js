const express = require('express');
const PORT = process.env.PORT || 8080;

let app = express();

app.use((req, res, next) => {
    console.log('PATH: ' + req.path);
    next();
});
app.use('/testi',(req, res, next) => {
    console.log('moro');
    next();
});

app.get('/',(req, res, next) => {
    res.send('Hello');
    //res.end();
});

app.use((req, res, next) => {
    console.log('404');
    res.status(404);
    res.send(`<html>page not found</html>`);
})


app.listen(PORT);