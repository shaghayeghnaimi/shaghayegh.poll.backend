const DatabaseManager = require('../../../core/database/databaseManager');

class choiceReader {
  static async getAllItems() {
    const query = "select * from choice";
    const result = await DatabaseManager.query(query);
    return result;
  }
  // static getaddressById(addressId) {
  //   const query = `
  //     select *
  //     from adresses
  //     where id = ${addressId}
  //   `;
  //   return DatabaseManager.query(query);
  // }
}
module.exports = choiceReader;