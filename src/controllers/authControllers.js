const getLogin = (req, res) => {
    // res.send('getLogin')
    res.render('login')
}
const postLogin = (req, res) => {
    res.send('postLogin')
}
const getRegister = (req, res) => {
    // res.send('getRegister')
    res.render('register')
}
const postRegister = (req, res) => {
    res.send('postRegister')
}
const getLogout = (req, res) => {
    res.send('getLogout')
}

const controllers = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    getLogout
}

module.exports = controllers; 