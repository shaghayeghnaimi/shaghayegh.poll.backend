const DatabaseManager = require('../../../core/database/databaseManager');

class ItemReader {
  static async getItemsByPollId(pollId) {
    const query = `select item, id from choice where poll_id=${pollId}`;
    const result = await DatabaseManager.query(query);
    
    return result;
  }
  static getItemById(ItemId) {
    const query = `
      select *
      from choice
      where id = ${ItemId}
    `;
    return DatabaseManager.query(query);
  }

}
module.exports = ItemReader;