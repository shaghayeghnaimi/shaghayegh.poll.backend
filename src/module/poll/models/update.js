const DatabaseManager = require('../../../core/database/databaseManager');


class AddressUpdate {
  
  static updateAddress(addressData) {
    const {id, city, street, allay, code, phone_number} = addressData;
    const query = `
    UPDATE packages
    SET city = '${city}', street = '${street}', allay = '${allay}', code = '${code}', phone_number = ${phone_number}
    WHERE id= ${id} ;
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = AddressUpdate;