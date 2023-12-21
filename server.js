const express = require('express');
const { resolve } = require('path');
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
require('dotenv').config();
const cors = require('cors');
const methodOverride = require('method-override');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', resolve() + '/src/views/partials');
app.use(express.urlencoded({ extended: true }));
// app.use(express.json);
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

