const ParticipentReader = require("./models/read");
const ParticipentCreator = require("./models/create");
// const PackageUpdate = require("./models/update");
// const PackageDelete = require("./models/delete");
class ParticipentController {
  // static async getAllPackags(req, res, next) {
  //   try {
  //     const packages = await PackageReader.getAllPackages();
  //     res.send(packages);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  static async getParticipentByPollId(req, res, next) {
    try {
      const pollId = req.params.id;
      console.log('req.params :>> ', req.params);
      const result = await ParticipentReader.getParticipentByPollId(pollId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async createParticipent(req, res, next) {
    try {
      const participentData = req.body;
      console.log('req.body :>> ', req.body);
      const pollId = req.params.id;   const result = await ParticipentCreator.createParticipent(participentData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  // static async updatePackage(req, res, next) {
  //   try {
  //     const packageData = req.body;
  //     const result = await PackageUpdate.updatePackage(packageData);
  //     res.send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // static async deletePackage(req, res, next) {
  //   try {
  //     const packageData = req.body;
  //     const result = await PackageDelete.deletePackage(packageData);
  //     res.send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

module.exports = ParticipentController;
