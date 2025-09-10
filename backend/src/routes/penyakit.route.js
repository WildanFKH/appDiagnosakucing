const express = require('express');
const router = express.Router();
const penyakitController = require('../controllers/penyakit.controller');

router.get('/', penyakitController.getAll);
router.get('/:id', penyakitController.getById);
router.post('/', penyakitController.create);
router.put('/:id', penyakitController.update);
router.delete('/:id', penyakitController.delete);

module.exports = router;
