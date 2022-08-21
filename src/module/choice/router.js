const express = require('express');
const ItemController = require('./controller');
const ItemValidator = require("./validation/index");


const router = express.Router();


router.get('/:id', ItemController.getItemById);
router.get('/id/:id', ItemController.getItemsByPollId)
router.post('/', ItemValidator.createItemSchema,ItemController.createItem);
// router.patch('/', AddressController.updateAddress )
// router.delete('/', AddressController.deleteAddress)

module.exports = router;