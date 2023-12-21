const { getAll, getOne } = require('../models/productModel.js');



const getItems = async(req, res) => {
    const data = await getAll();
    res.render(('shop'), { data })
}
const getItem = async(req, res) => {
    const itemId = req.params.id;
    const [item] = await getOne(itemId);
    res.render(('item'), { item });

}
const postItem = (req, res) => {
    res.send('getContact')
}
const getCart = (req, res) => {
    // res.send('getAbout')
    res.render('cart')
}
const postCart = (req, res) => {
    res.send('getFaqs')
}

const controllers = {
    getItems,
    getItem,
    postItem,
    getCart,
    postCart
}

module.exports = controllers; 