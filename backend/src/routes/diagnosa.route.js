const express = require('express');
const router = express.Router();
const DiagnosaController = require('../controllers/diagnosa.controller');

router.post('/', DiagnosaController.create);
router.put('/:id', DiagnosaController.update);
router.delete('/:id', DiagnosaController.delete);
router.get('/:id', DiagnosaController.getById);
router.get('/', DiagnosaController.getAll);

module.exports = router;
