const express = require('express');
const router = express.Router();
const sizeController=require('./infras/transport/index');
router.get('/', sizeController.get);
router.post('/', sizeController.createSize);
router.put('/:id', sizeController.updateSize);
router.delete('/:id', sizeController.removeSize);
module.exports = router;