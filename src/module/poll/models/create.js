const DatabaseManager = require('../../../core/database/databaseManager');


class PollCreator {
  
  static createPoll(userId, dataPoll) {
    const {title, description} = dataPoll;
    const query = `
      insert into poll
      (title, description, user_id, link)
      values
      ('${title}', '${description}', ${userId}, "jdfhgbjksdf");
    `;
    console.log('query :>> ', query);
    return DatabaseManager.query(query);
  }
}

module.exports = PollCreator;