const DatabaseManager = require("../../../core/database/databaseManager");

class ChoicesReader {


  static getChoiceById(choiceId) {
    const query = `
    SELECT * 
    FROM participent_choice
    WHERE ID = ${choiceId};`;
    return DatabaseManager.query(query);
  }

  static getChoiceByItemId(itemId) {
    const query = `
    SELECT *
    FROM
	  participent_choice
	  INNER JOIN choice ON participent_choice.choice_id = choice.id
    WHERE	choice.id = ${itemId};`;
    return DatabaseManager.query(query);
  }
  static getChoiceByPollId(pollId) {
    const query = `
    SELECT *
    FROM
	  participent_choice
    WHERE	poll_idd = ${pollId};`;
    return DatabaseManager.query(query);
  }
}
module.exports = ChoicesReader;