const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');
const brandController=require('../controllers/brand.controller')
/* GET programming languages. */
router.get('/', applicationController.get);
router.get('/Brand', brandController.get);
  
/* POST programming language */
router.post('/', applicationController.createSell);
router.post('/Brand', brandController.createBrand);
/* PUT programming language */
router.put('/:id', applicationController.update);
router.put('/Brand/:id', brandController.updateBrand);
/* DELETE programming language */
router.delete('/:id', applicationController.remove1);
router.delete('/Brand/:id', brandController.removeBrand);
module.exports = router;