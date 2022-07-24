const DatabaseManager = require('../../../core/database/databaseManager');


class UserCreator {
  
  static createUser(userData) {
    const {user_name, email, pass, first_name, last_name} = userData;
    const query = `
      insert into user
      (user_name, email, pass, first_name, last_name)
      values
      ('${user_name}', '${email}', '${pass}', '${first_name}'. '${last_name}' );
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = UserCreator;