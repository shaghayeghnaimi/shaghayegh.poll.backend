const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls() {
    const query =
      "SELECT poll.title, poll.id, poll.description, poll.link, COUNT(participent.id) AS numOfParticipent FROM poll Left JOIN participent ON poll.id = participent.poll_id group by poll_id;";
    const result = await DatabaseManager.query(query);
    return result;
  }
  // static getaddressById(addressId) {
  //   const query = `
  //     select *
  //     from adresses
  //     where id = ${addressId}
  //   `;
  //   return DatabaseManager.query(query);
  // }
}
module.exports = PollReader;
