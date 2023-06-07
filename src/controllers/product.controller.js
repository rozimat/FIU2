const Io = require('../utils/Io');
const Product = new Io('./db/products.json');
const ProductModels = require('../models/Products');
const { v4 : uuid } = require('uuid');


const product = async (req, res ) =>{
  const products = await Product.read();
  const {  pro_name, pro_price } = req.body;
  const { pro_img } = req?.files;
  const pro_id = uuid();

  const newImage = `${uuid()}.${pro_img.mimetype.split('/')[1]}`;
  pro_img.mv(`${process.cwd()}/uploads/products/${newImage}`)

  const newProduct = new ProductModels(pro_id, pro_name, pro_price, newImage);

  const data = products.length ? [...products, newProduct] : [newProduct]
  Product.write(data);
  
  res.status(201).json({ message : "success", products });

}

const productGet = async(req, res)=>{
  const data = await Product.read();
  res.status(200).json(data)
}

module.exports = {

  product,
  productGet,

};
