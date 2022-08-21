const DatabaseManager = require("../../../core/database/databaseManager");

class PollDelete {
  static async deletePoll(pollId) {
    const query = `DELETE FROM poll WHERE id = ${pollId};`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollDelete;
