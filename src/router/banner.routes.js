const router = require('express').Router();
const { banner, bannerGetData } = require('../controllers/banner.controllers')

router.post('/api/admin/banner', banner);
router.get('/api/admin/bannerget', bannerGetData);


module.exports = router;
