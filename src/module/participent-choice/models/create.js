const DatabaseManager = require('../../../core/database/databaseManager');


class PackageCreator {
  
  static createPackage(packageData) {
    const {reciever_id, sender_id, trackingNumber, weight,price} = packageData;
    const query = `
      insert into packages
      (reciever_id, sender_id, trackingNumber, weight,price)
      values
      (${reciever_id}, ${sender_id}, ${trackingNumber}, '${weight}',  '${price}');
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = PackageCreator;