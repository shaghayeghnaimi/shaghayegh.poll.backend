const express = require('express');
const ChoiceController = require('./controller');

const router = express.Router();


router.get('/', ChoiceController.getAllItems);
router.post('/', ChoiceController.createChoice);
// router.patch('/', AddressController.updateAddress )
// router.delete('/', AddressController.deleteAddress)

module.exports = router;