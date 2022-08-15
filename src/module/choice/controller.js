const choiceReader = require("./models/read");
const ChoiceCreator = require("./models/create");
// const AddressUpdate = require("./models/update");
// const AddressDelete = require("./models/delete");
class ChoiceController {
  static async getAllItems(req, res, next) {
    try {
      const items = await choiceReader.getAllItems();
      res.send(items);
    } catch (error) {
      next(error);
    }
  }

  // static async getaddressById(req, res, next) {
  //   try {
  //     const addressId = req.params.id;
  //     const result = await AddressReader.getaddressById(addressId);
  //     res.send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // res;

  static async createChoice(req, res, next) {
    try {
      const dataChoice = req.body;
      const result = await ChoiceCreator.createChoice(dataChoice);
      console.log('result :>> ', result);
      res.send(result);
    } catch (error) {
      next(error);
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
}

module.exports = ChoiceController;
