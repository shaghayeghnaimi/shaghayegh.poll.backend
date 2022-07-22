const DatabaseManager = require('../../../core/database/databaseManager');

class PackageReader {
  static async getAllPackages() {
    const query = "select * from packages";
    const result = await DatabaseManager.query(query);
    return result;
  }
  static getPackageById(PackageId) {
    const query = `
      select *
      from packages
      where id = ${PackageId}
    `;
    return DatabaseManager.query(query);
  }
}
module.exports = PackageReader;
