const router = require('express').Router();
const { subscribe } = require('../controllers/subscribe.controller')


router.post('/api/user/subscribe', subscribe)


module.exports = router;