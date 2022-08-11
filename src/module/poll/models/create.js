const DatabaseManager = require('../../../core/database/databaseManager');


class PollCreator {
  
  static createPoll(dataPoll) {
    const {title, description} = dataPoll;
    const query = `
      insert into poll
      (title, description)
      values
      ('${title}', '${description}'});
    `;
    console.log('query :>> ', query);
    return DatabaseManager.query(query);
  }
}

module.exports = PollCreator;