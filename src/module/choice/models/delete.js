const DatabaseManager = require('../../../core/database/databaseManager');


class AddressDelete {
  
  static deleteAddress(addressData) {
    const {id} = addressData;
    const query = `
    DELETE FROM packages WHERE id= ${id};

    `;

    return DatabaseManager.query(query);
  }
}

module.exports = AddressDelete;