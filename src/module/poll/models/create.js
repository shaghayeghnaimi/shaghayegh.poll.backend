const DatabaseManager = require('../../../core/database/databaseManager');


class PollCreator {
  
  static createPoll(userId, dataPoll) {
    const {title, description} = dataPoll;
    const query = `
      insert into poll
      (title, description, user_id)
      values
      ('${title}', '${description}', ${userId} );
    `;

    return DatabaseManager.query(query);

  }
}

module.exports = PollCreator;