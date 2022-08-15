const express = require('express');
const PollController = require('./controller');
const AuthMiddleware = require('../../core/middleware/auth');

const router = express.Router();


router.get('/', PollController.getAllPolls);
router.post('/', AuthMiddleware.jwtTokenValidation,PollController.createPoll);
// router.patch('/', AddressController.updateAddress )
// router.delete('/', AddressController.deleteAddress)

module.exports = router;