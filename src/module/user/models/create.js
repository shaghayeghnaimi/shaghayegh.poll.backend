const DatabaseManager = require('../../../core/database/databaseManager');


class UserCreator {
  
  static createUser(userData) {
    const {name, address_id} = userData;
    const query = `
      insert into users
      (name, address_id)
      values
      ('${name}', ${address_id});
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = UserCreator;