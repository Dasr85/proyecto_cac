const express = require('express');
const { resolve } = require('path');
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
// const uploadMiddleware = require('./src/middlewares/uploadMiddleware.js');
const cors = require('cors');


const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.static('public'));
// app.post('/',uploadMiddleware.single('imagen') ,(req,res) => res.send('hola'))
app.set('view engine', 'ejs');
app.set('views', resolve() + '/src/views/partials');
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

