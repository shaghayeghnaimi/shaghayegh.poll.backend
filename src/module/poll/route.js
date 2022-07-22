const express = require('express');
const AddressController = require('./controller');

const router = express.Router();


router.get('/', AddressController.getAlladresses);
router.get('/id/:id', AddressController.getaddressById);
router.post('/', AddressController.createAddress);
router.patch('/', AddressController.updateAddress )
router.delete('/', AddressController.deleteAddress)

module.exports = router;