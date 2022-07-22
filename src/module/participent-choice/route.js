const express = require('express');
const PackageController = require('./controller');

const router = express.Router();


router.get('/', PackageController.getAllPackags);
router.get('/id/:id', PackageController.getPackageById);
router.post('/', PackageController.createPackage);
router.patch('/', PackageController.updatePackage )
router.delete('/', PackageController.deletePackage)

module.exports = router;