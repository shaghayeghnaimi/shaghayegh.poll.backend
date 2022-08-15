const DatabaseManager = require('../../../core/database/databaseManager');
const saltRounds = 10;
const bcrypt = require("bcrypt");

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
  
  static async getUsersByemail(email) {
    // const hashedPass = await bcrypt.hash(pass, saltRounds);
    const query = `
      select * from user
      where
        email = '${email}';
    `;
    const dbResult = await DatabaseManager.query(query);
    return dbResult[0];
  }
}

module.exports = UserReader;