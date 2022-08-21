const DatabaseManager = require("../../../core/database/databaseManager");

class ItemCreator {
  static async createItem(ItemData) {
    const { poll_id, item } = ItemData;
    const query = `
    INSERT INTO choice
    (poll_id, item)  
    VALUES
    (${poll_id},'${item}');`;
  
    const result = await DatabaseManager.query(query);
    return result;
  
  }
  
}
module.exports = ItemCreator;