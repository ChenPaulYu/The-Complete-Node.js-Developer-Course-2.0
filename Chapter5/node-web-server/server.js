const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.Port || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return  new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });



app.get('/',(req,res) => {
    res.render('home.hbs', {
        pagetitle: 'Home page',
        welcomeMessage:'Welcome to My Website',
        currentYear: new Date().getFullYear()

    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pagetitle:'About page',
        currentYear: new Date().getFullYear()

    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage:'Unable to handle request'
    });
})

app.listen(port,()=>{
    console.log('server is up on port',port);
});