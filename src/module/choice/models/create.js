const DatabaseManager = require('../../../core/database/databaseManager');


class ChoiceCreator {
  
  static createChoice(dataChoice) {
    const {item} = dataChoice;
    const query = `
      insert into choice
      (item)
      values
      ('${item}');
    `;
    console.log('query :>> ', query);
    return DatabaseManager.query(query);
  }
}

module.exports = ChoiceCreator;