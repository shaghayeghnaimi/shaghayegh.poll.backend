const express = require('express');
const PollController = require('./controller');
const AuthMiddleware = require('../../core/middleware/auth');
const PollValidator = require("./validation");


const router = express.Router();


router.get('/', AuthMiddleware.jwtTokenValidation, PollController.getAllPolls);
router.get('/:id',PollController.getPollById);
router.post('/', AuthMiddleware.jwtTokenValidation, PollValidator.createPollSchema,PollController.createPoll);
router.patch('/title/:id',  AuthMiddleware.jwtTokenValidation,PollController.updateTitle);
router.patch('/description/:id',  AuthMiddleware.jwtTokenValidation,PollController.updateDescription)
router.delete('/:id', PollController.deletePoll)

module.exports = router;