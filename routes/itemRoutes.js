const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getIndex);
router.get('/item', itemController.getItems);
router.post('/item', itemController.createItem);
router.post('/item/update/:id', itemController.updateItem);
router.delete('/item/delete/:id', itemController.deleteItem);

module.exports = router;
