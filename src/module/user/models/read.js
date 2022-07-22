const DatabaseManager = require('../../../core/database/databaseManager');

class UserReader {
  
  static async getAllUsers() {
    const query = `select * from web.users;`;
    const result = await DatabaseManager.query(query);
    return result;
  }

  static getUserById(userId) {
    const query = `
      select *
      from web.users
      where id = ${userId}
    `;
    return DatabaseManager.query(query);
  }
  
  static async getUsersByEmailAndPassword(email, password) {
    const query = `
      select * from users
      where
        email = '${email}'
      and
        password = '${password}';
    `;
    const dbResult = await DatabaseManager.query(query);
    return dbResult[0];
  }
}

module.exports = UserReader;