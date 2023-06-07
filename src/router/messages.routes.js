const router = require('express').Router();
const { message, messageGet } = require('../controllers/message.controller')


router.post('/api/user/message', message)
router.get('/api/admin/message', messageGet)


module.exports = router;