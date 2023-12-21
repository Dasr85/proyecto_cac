const { NUMBER } = require('sequelize');
const {getAll, getOne, create, deleteOne, edit} = require ('../models/productModel.js');


const getAdmin = async(req, res) => {
    const data = await getAll();
    res.render(('admin'), {data})
}
const getCreate = (req, res) => {
    
    res.render('create')
}
const postCreate = async(req, res) => {

    const product_schema = {
        product_name: req.body.name,
        product_description: req.body.description,
        price: Number(req.body.price),
        stock: Number(req.body.stock),
        discount: Number(req.body.discount),
        sku: req.body.sku,
        dues: Number(req.body.dues),
        img_front: req.files[0].filename,
        img_back: req.files[1].filename,
        licence_id: Number(req.body.licence),
        category_id: Number(req.body.category)
    }
    const result = await create([Object.values(product_schema)]);

    res.redirect('/admin')
}
const getEdit = async(req, res) => {
    const itemId = req.params.id;
    const [product] = await getOne({product_id: itemId});
    res.render(('edit'), {product})
}
const putEdit = async(req, res) => {
    const { id } = req.params;
    const haveImages = req.files.length !== 0;

    const product_schema = haveImages
    ?{
        product_name: req.body.name,
        product_description: req.body.description,
        price: Number(req.body.price),
        stock: Number(req.body.stock),
        discount: Number(req.body.discount),
        sku: req.body.sku,
        dues: Number(req.body.dues),
        img_front: req.files[0].filename,
        img_back: req.files[1].filename,
        licence_id: Number(req.body.licence),
        category_id: Number(req.body.category)
    }
    : {
        product_name: req.body.name,
        product_description: req.body.description,
        price: Number(req.body.price),
        stock: Number(req.body.stock),
        discount: Number(req.body.discount),
        sku: req.body.sku,
        dues: Number(req.body.dues),
        licence_id: Number(req.body.licence),
        category_id: Number(req.body.category)
    };
    await edit(product_schema, {product_id: id});

    res.redirect('/shop');

}
const deleteId = async(req, res) => {
    const { id } = req.params;
    await deleteOne({product_id: id});
    res.redirect('/admin')
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