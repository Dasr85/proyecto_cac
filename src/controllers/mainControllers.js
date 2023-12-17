const getMainPage = (req, res) => {
    // res.send('getMain')
    res.render('index')
}
const getHomePage = (req, res) => {
    // res.send('getHome')
    res.render('login')
}
const getContactPage = (req, res) => {
    // res.send('getContact')
    res.render('contact')
}
const getAboutPage = (req, res) => {
    // res.send('getAbout')
    res.render('create')
}
const getFaqsPage = (req, res) => {
    // res.send('getFaqs')
    res.render('edit')
}

const controllers = {
    getMainPage,
    getHomePage,
    getContactPage,
    getAboutPage,
    getFaqsPage
}

module.exports = controllers; 