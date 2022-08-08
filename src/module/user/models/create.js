const DatabaseManager = require('../../../core/database/databaseManager');
const saltRounds = 10;
const bcrypt = require("bcrypt");


class UserCreator {
  static async createUser(userData) {
    const {user_name, email, pass, first_name, last_name} = userData;
    const hashedPass = await bcrypt.hash(pass, saltRounds)
    const query = `
      insert into user
      (user_name, email, pass, first_name, last_name)
      values
      ('${user_name}', '${email}', '${hashedPass}', '${first_name}', '${last_name}' );
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = UserCreator;