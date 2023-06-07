const router = require('express').Router();
const { product, productGet} = require('../controllers/product.controller')


router.post('/api/admin/products', product)
router.get('/api/admin/productsget', productGet)

module.exports = router;