const DatabaseManager = require('../../../core/database/databaseManager');


class AddressCreator {
  
  static createAddress(addressData) {
    const {city, street, allay, code, phone_number} = addressData;
    const query = `
      insert into adresses
      (city, street, allay, code, phone_number)
      values
      ('${city}', '${street}', '${allay}', '${code}', ${phone_number});
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = AddressCreator;