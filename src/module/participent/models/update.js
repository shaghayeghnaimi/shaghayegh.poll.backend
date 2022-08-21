const DatabaseManager = require('../../../core/database/databaseManager');


class PackageUpdate {
  
  static updatePackage(packageData) {
    const {id, reciever_id, sender_id, trackingNumber, weight,price} = packageData;
    const query = `
    UPDATE packages
    SET reciever_id = '${reciever_id}', sender_id = '${sender_id}', weight = '${weight}', price = '${price}', trackingNumber = ${trackingNumber}
    WHERE id= ${id} ;
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = PackageUpdate;