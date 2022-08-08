const AddressReader = require("./models/read");
const PollCreator = require("./models/create");
const AddressUpdate = require("./models/update");
const AddressDelete = require("./models/delete");
class PollController {
  // static async getAlladresses(req, res, next) {
  //   try {
  //     const addresses = await AddressReader.getAllAddresses();
  //     res.send(addresses);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

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

  static async createPoll(req, res, next) {
    try {
      const PollData = req.body;
      const result = await PollCreator.createPoll(PollData);
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

module.exports = PollController;
