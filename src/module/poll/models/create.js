const DatabaseManager = require('../../../core/database/databaseManager');


class PollCreator {
  
  static createPoll(addressData) {
    const {title, description, user_id} = addressData;
    const query = `
      insert into adresses
      (title, description, user_id)
      values
      ('${title}', '${description}', ${user_id});
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = PollCreator;