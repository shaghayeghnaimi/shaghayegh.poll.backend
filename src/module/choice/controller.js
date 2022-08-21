const ItemReader = require("./models/read");
const ItemCreator = require("./models/create");
const DatabaseManager = require("../../core/database/databaseManager");

class ItemController {
  static async getItemsByPollId(req, res, next) {
    try {
      const pollId = req.query.id;
      const items = await ItemReader.getItemsByPollId(pollId);
      res.send(items);
    } catch (error) {
      next(error);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const ItemId = req.params.id;
      const result = await ItemReader.getItemById(ItemId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }


  static async createItem(req, res, next) {
    try {
      const dataItem = req.body;
      dataItem.forEach(async (item) => {
        await ItemCreator.createItem(item);
      });
      const pollId = dataItem[0].poll_id;
      const query = `SELECT id FROM poll WHERE id= ${pollId}`;
      await DatabaseManager.query(query);
  
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

module.exports = ItemController;
