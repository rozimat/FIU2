const {v4 : uuid } = require('uuid')
const Io = require('../utils/Io');
const Banner = new Io('./db/banner.json');
const BannerModels = require('../models/Banner');



const banner = async (req, res)=>{
  const banners = await Banner.read();
  const { title, text } = req.body;
  const  { image } = req.files;
  const id = uuid();

  const newImage = `${uuid()}.${image.mimetype.split('/')[1]}`;
  image.mv(`${process.cwd()}/uploads/${newImage}`)

  const newBanner = new BannerModels( id, newImage, title, text);
  const data = [...banners, newBanner];
  Banner.write(data);
  res.status(201).json({ message: "Successfully created!" });

}

const bannerGetData = async (req, res)=>{
  const data = await Banner.read();

  res.status(200).json(data)
}

module.exports = {
  banner,
  bannerGetData,

};