const express = require('express');
const ChoicesController = require('./controller');


const router = express.Router();


// router.get('/:id', ChoicesController.getChoiceById);
router.get('/:id', ChoicesController.getChoiceByPollId)
router.post('/', ChoicesController.createChoice);
// router.patch('/', AddressController.updateAddress )
// router.delete('/', AddressController.deleteAddress)

module.exports = router;