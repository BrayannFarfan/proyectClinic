const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000
const homeRouter =  require('./routes/homeRoutes')

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRouter);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT)}
    );

app.use('/', homeRouter)