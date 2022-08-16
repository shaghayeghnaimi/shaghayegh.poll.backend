const DatabaseManager = require("../../../core/database/databaseManager");

class PollDelete {
  static deletePoll(pollId) {
    const query = `DELETE FROM poll WHERE id = ${pollId};`;
    return DatabaseManager.query(query);
  }
}

module.exports = PollDelete;
