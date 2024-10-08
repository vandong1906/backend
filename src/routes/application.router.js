const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');

/* GET programming languages. */
router.get('/', applicationController.get);
  
/* POST programming language */
router.post('/', applicationController.createSell);

/* PUT programming language */
router.put('/:id', applicationController.update);

/* DELETE programming language */
router.delete('/:id', applicationController.remove1);

module.exports = router;