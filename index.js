const express = require('express');
const restaurantRouter = require('./routes/restaurant');
const hbs = require('express-handlebars');
const paht = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', restaurantRouter);

app.listen(3000, () => {
    console.log('Listening to port 3000')
});

app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(paht.join(__dirname, 'public')));