const DatabaseManager = require('../../../core/database/databaseManager');

class AddressReader {
  static async getAllAddresses() {
    const query = "select * from adresses";
    const result = await DatabaseManager.query(query);
    return result;
  }
  static getaddressById(addressId) {
    const query = `
      select *
      from adresses
      where id = ${addressId}
    `;
    return DatabaseManager.query(query);
  }
}
module.exports = AddressReader;