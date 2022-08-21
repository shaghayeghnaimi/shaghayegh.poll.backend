const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(userId) {
    const query = `SELECT poll.title, poll.id, poll.description,  COUNT(participent.id) AS numOfParticipent FROM poll LEFT JOIN participent ON poll.id = participent.poll_id where user_id=${userId} group by id`;
    const result = await DatabaseManager.query(query);
    return result;
  }
  static async getPollById(pollId) {
    const query = `select title, description from poll where id = ${pollId}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}
module.exports = PollReader;
