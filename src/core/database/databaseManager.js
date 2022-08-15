const mysql2 = require('mysql2/promise');
const secrets = require('../../config/index');

class DatabaseManager {
  constructor() {
    this.poolConnection = mysql2.createPool(secrets.database);
  }
  
  async query(sqlQuery) {
    console.log('sqlQuery :>> ', sqlQuery);
    const result = await this.poolConnection.query(sqlQuery);
    return result[0];
  }
  
}

module.exports = new DatabaseManager();