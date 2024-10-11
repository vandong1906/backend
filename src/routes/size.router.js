const express = require('express');
const router = express.Router();
const sizeController=require('../controllers/size.controller')
router.get('/', sizeController.get);
router.post('/', sizeController.createSize);
router.put('/:id', sizeController.updateSize);
router.delete('/:id', sizeController.removeSize);
module.exports = router;