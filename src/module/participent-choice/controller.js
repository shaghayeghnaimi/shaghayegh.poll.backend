const ChoicesReader = require("./models/read");
const ChoicesCreator = require("./models/create");
const DatabaseManager = require("../../core/database/databaseManager");

class ChoicesController {
  static async getChoiceById(req, res, next) {
    try {
      const choiceId = req.params.id;
      const result = await ChoicesReader.getChoiceById(choiceId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async getChoiceByItemId(req, res, next) {
    try {
      const itemId = req.params.id;
      const result = await ChoicesReader.getChoiceByItemId(itemId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async getChoiceByPollId(req, res, next) {
    try {
      const pollId = req.params.id;
      console.log('req :>> ', req);
      const result = await ChoicesReader.getChoiceByPollId(pollId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

    static async createChoice(req, res, next) {
      try {
        const choiceData = req.body;
        const result = await ChoicesCreator.createChoice(choiceData);
        res.send(result);
      } catch (error) {
        next(error);
      }
    }
  }

  // static async updateAddress(req, res, next) {
  //   try {
  //     const addressData = req.body;
  //     const result = await AddressUpdate.updateAddress(addressData);
  //     res.send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // static async deleteAddress(req, res, next) {
  //   try {
  //     const addressData = req.body;
  //     const result = await AddressDelete.deleteAddress(addressData);
  //     res.send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }


module.exports = ChoicesController;
