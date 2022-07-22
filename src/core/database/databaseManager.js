const mysql2 = require('mysql2/promise');
const secrets = require('../../config/index.js');

class DatabaseManager {
  constructor() {
    this.poolConnection = mysql2.createPool(secrets.database);
  }
  
  async query(sqlQuery) {
    const result = await this.poolConnection.query(sqlQuery);
    return result[0];
  }
  
}

module.exports = new DatabaseManager();