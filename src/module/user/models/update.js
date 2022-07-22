const DatabaseManager = require('../../../core/database/databaseManager');


class UserUpdate {
  
  static updateUser(userData) {
    const {id, name, address_id} = userData;
    const query = `
    UPDATE packages
    SET name = '${name}', address_id = '${address_id}'
    WHERE id= ${id} ;
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = UserUpdate;