const multer = require('multer');
const { resolve } = require('path');


const destination = (req,file,cb) => {
    cb(null, resolve() + '/public/img')
}

const filename = (req,file,cb) => {
    cb(null, file.originalname)
}
const config ={destination, filename} 
const storage = multer.diskStorage(config)
const uploadMiddleware = multer({storage})


module.exports = uploadMiddleware
