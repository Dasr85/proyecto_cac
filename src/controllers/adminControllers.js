const getAdmin = (req, res) => {
    res.send('getAdmin')
}
const getCreate = (req, res) => {
    // res.send('getCreate')
    res.render('create')
}
const postCreate = (req, res) => {
    res.send('postCreate')
}
const getEdit = (req, res) => {
    // res.send(`getedit ${req.params.id}`)
    // res.render(`edit ${req.params.id}`)
    res.render('edit')
}
const putEdit = (req, res) => {
    res.send(`putEdit ${req.params.id}`)
}
const deleteId = (req, res) => {
    res.send(`deleteId ${req.params.id}`)
}
const controllers = {
    getAdmin,
    getCreate,
    postCreate,
    getEdit,
    putEdit,
    deleteId
}

module.exports = controllers; 