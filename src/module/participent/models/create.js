const DatabaseManager = require('../../../core/database/databaseManager');


class ParticipentCreator {
  
  static createParticipent(participentData) {
    const {poll_id, name} = participentData;
    const query = `
      insert into participent
      (poll_id, name)
      values
      ( ${poll_id}, '${name}');
    `;
    const result = DatabaseManager.query(query);
    return result;
  }
}

module.exports = ParticipentCreator;