const express = require('express');
const ParticipentController = require('./controller');
const ParticipantValidator = require("./validation");


const router = express.Router();


// router.get('/', PackageController.getAllPackags);
router.get('/:id', ParticipentController.getParticipentByPollId);
router.post('/',  ParticipantValidator.createParticipentSchema,ParticipentController.createParticipent);
// router.patch('/', PackageController.updatePackage )
// router.delete('/', PackageController.deletePackage)

module.exports = router;