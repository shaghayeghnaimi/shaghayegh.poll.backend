const express = require('express');
const PollController = require('./controller');

const router = express.Router();


router.get('/', PollController.getAllPolls);
router.post('/', PollController.createPoll);
// router.patch('/', AddressController.updateAddress )
// router.delete('/', AddressController.deleteAddress)

module.exports = router;