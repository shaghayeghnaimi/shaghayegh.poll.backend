const DatabaseManager = require('../../../core/database/databaseManager');


class PollUpdate {
  
  static async updateTitle(pollId, dataPoll) {
    const {title} = dataPoll;
    const query = `
    UPDATE poll
    SET title = '${title}'
    WHERE id= ${pollId} ;
    `;
    const result = await DatabaseManager.query(query);
    console.log('result1 :>> ', result);
    return result;
  }
  static async updateDescription(pollId, dataPoll) {
    const {description} = dataPoll;
    const query = `
    UPDATE poll
    SET description = '${description}'
    WHERE id= ${pollId} ;
    `;
    const result = await DatabaseManager.query(query);
    console.log('result1 :>> ', result);
    return result;
  }
}

module.exports = PollUpdate;