const DatabaseManager = require('../../../core/database/databaseManager');

class ParticipentReader {
  // static async getAllPackages() {
  //   const query = "select * from packages";
  //   const result = await DatabaseManager.query(query);
  //   return result;
  // }
  static async getParticipentByPollId(pollId) {
    const query = `
      select name
      from participent
      where poll_id = ${pollId}
    `;
    const result= await DatabaseManager.query(query);
    console.log('result :>> ', result);
    return result
  }
}
module.exports = ParticipentReader;
