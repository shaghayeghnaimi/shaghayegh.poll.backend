const DatabaseManager = require('../../../core/database/databaseManager');

class PollReader {
  static async getAllPolls() {
    const query = "select * from poll";
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
module.exports = PollReader;