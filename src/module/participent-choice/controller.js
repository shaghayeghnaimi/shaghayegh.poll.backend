const PackageReader = require("./models/read");
const PackageCreator = require("./models/create");
const PackageUpdate = require("./models/update");
const PackageDelete = require("./models/delete");
class PackageController {
  static async getAllPackags(req, res, next) {
    try {
      const packages = await PackageReader.getAllPackages();
      res.send(packages);
    } catch (error) {
      next(error);
    }
  }

  static async getPackageById(req, res, next) {
    try {
      const packageId = req.params.id;
      const result = await PackageReader.getPackageById(packageId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async createPackage(req, res, next) {
    try {
      const packageData = req.body;
      const result = await PackageCreator.createPackage(packageData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async updatePackage(req, res, next) {
    try {
      const packageData = req.body;
      const result = await PackageUpdate.updatePackage(packageData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async deletePackage(req, res, next) {
    try {
      const packageData = req.body;
      const result = await PackageDelete.deletePackage(packageData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PackageController;
