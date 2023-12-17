const getItems = async(req, res) => {
    // res.send('getItems')
    res.render('shop')
}
const getItem = (req, res) => {
    // res.send(`getHome ${req.params.id}`)
    res.render('item')
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