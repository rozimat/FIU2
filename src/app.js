const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./router');
const app = express();


app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(process.cwd() + "/uploads"));
app.use(router)



app.listen(4000, ()=>{
  console.log(400);
})