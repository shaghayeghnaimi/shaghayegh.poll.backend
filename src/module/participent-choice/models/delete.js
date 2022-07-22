const DatabaseManager = require('../../../core/database/databaseManager');


class PackageDelete {
  
  static deletePackage (packageData) {
    const {id} = packageData;
    const query = `
    DELETE FROM packages WHERE id= ${id};

    `;

    return DatabaseManager.query(query);
  }
}

module.exports = PackageDelete;