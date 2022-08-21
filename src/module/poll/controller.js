const PollReader = require("./models/read");
const PollCreator = require("./models/create");
const PollUpdate = require("./models/update");
const PollDelete = require("./models/delete");
class PollController {
  static async getAllPolls(req, res, next) {
    try {
      const userId = req.loggedInUserData.id;
      const polls = await PollReader.getAllPolls(userId);
      res.send(polls);
    } catch (error) {
      next(error);
    }
  }

  static async getPollById(req, res, next) {
    try {
      const PollId = req.params.id;
      const result = await PollReader.getPollById(PollId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  

  static async createPoll(req, res, next) {
    try {
      const dataPoll = req.body;
      const userId = req.loggedInUserData.id;
      const result = await PollCreator.createPoll(userId, dataPoll);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async updateTitle(req, res, next) {
    try {
      const dataPoll = req.body;
      const pollId = req.params.id;
      const result = await PollUpdate.updateTitle(pollId,dataPoll);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async updateDescription(req, res, next) {
    try {
      const dataPoll = req.body;
      const pollId = req.params.id;
      const result = await PollUpdate.updateDescription(pollId,dataPoll);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async deletePoll(req, res, next) {
    try {
      const pollData = req.params.id;
      const result = await PollDelete.deletePoll(pollData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PollController;
