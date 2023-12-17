const express = require('express');
const { resolve } = require('path');
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
// const productsRoutes = require('./src/routes/productsRoutes.js');
const dbConnect = require('./src/config/connection.js');

dbConnect();
const app = express();

const PORT = 8080;


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', resolve() + '/src/views/partials');
app.use(express.urlencoded({ extended: true }));

// app.use('/', productsRoutes);
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

