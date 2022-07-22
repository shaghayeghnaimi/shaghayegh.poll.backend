const UserReader = require("./models/read");
const UserCreator = require("./models/create");
const UserUpdate = require("./models/update");
const UserDelete = require("./models/delete");
class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await UserReader.getAllUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const userId = req.params.id;
      const result = await UserReader.getUserById(userId);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const userData = req.body;
      const result = await UserCreator.createUser(userData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async updateUser(req, res, next) {
    try {
      const userData = req.body;
      const result = await UserUpdate.updateUser(userData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteUser(req, res, next) {
    try {
      const userData = req.body;
      const result = await UserDelete.deleteUser(userData);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
