const express = require('express');
const router = express.Router();
const gejalaPenyakitController = require('../controllers/gejalaPenyakit.controller');

router.post('/', gejalaPenyakitController.create);
router.put('/:id', gejalaPenyakitController.update);
router.get('/', gejalaPenyakitController.getAll);
router.get('/:id', gejalaPenyakitController.getById);
router.delete('/:id', gejalaPenyakitController.delete);

module.exports = router;
