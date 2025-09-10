const express = require('express');
const router = express.Router();
const gejalaController = require('../controllers/gejala.controller');

router.get('/', gejalaController.getAllGejala);
router.get('/:id', gejalaController.getGejalaById);
router.post('/', gejalaController.createGejala);
router.put('/:id', gejalaController.updateGejala);
router.delete('/:id', gejalaController.deleteGejala);

module.exports = router;
