const DatabaseManager = require("../../../core/database/databaseManager");

class ChoicesCreator {
  static createChoice(choiceData) {
    const { item_id, participent_id } = choiceData;
    const query = `
    INSERT INTO participent_choice 
    (choice_id, participent_id)  
    VALUES
    (${item_id}, ${participent_id});`;
    return DatabaseManager.query(query);
  }
  
}
module.exports = ChoicesCreator;