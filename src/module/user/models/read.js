const DatabaseManager = require('../../../core/database/databaseManager');

class UserReader {
  
  static async getAllUsers() {
    const query = `select * from user;`;
    const result = await DatabaseManager.query(query);
    return result;
  }

  static getUserById(userId) {
    const query = `
      select *
      from user
      where id = ${userId}
    `;
    return DatabaseManager.query(query);
  }
  
  static async getUsersByEmailAndPassword(email, pass) {
    const query = `
      select * from user
      where
        email = '${email}'
      and
        pass = '${pass}';
    `;
    const dbResult = await DatabaseManager.query(query);
    console.log(dbResult);
    return dbResult[0];
  }
}

module.exports = UserReader;