const DatabaseManager = require('../../../core/database/databaseManager');


class PollUpdate {
  
  static updatePoll(dataPoll) {
    const {title, description, id} = dataPoll;
    const query = `
    UPDATE poll
    SET title = '${title}', description = '${description}'
    WHERE id= ${id} ;
    `;
    return DatabaseManager.query(query);
  }
}

module.exports = PollUpdate;