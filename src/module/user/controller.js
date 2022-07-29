const UserReader = require("./models/read");
const UserCreator = require("./models/create");
const DatabaseManager = require('../../core/database/databaseManager');
const saltRounds = 10;
const bcrypt = require("bcrypt");


class UserController {
  static async updateUser(req, res){
    try{
      const id = req.params.id;
      const {pass: pass} = req.body;
      const hashedPass = await bcrypt.hash(pass, saltRounds)
      const query =`update user set pass ='${hashedPass}' where id = ${id};`
      const user = await DatabaseManager.query(query) ;
      res.json(user[0])
    }catch(err){
      console.log('err :>> ', err);
    }
  }
  static async getAllUsers(req, res, next) {
    const user = await UserReader.getAllUsers();
    res.send(user);
  }
  
  static async getUserById(req, res, next) {
    try {
      const userId = req.params.id;
      if (userId != req.jwt_payload.id) {
        throw new Error("YOU can not get other users data");
      }
      const result = await UserReader.getUserById(userId);
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
    
  }
  
  static async createUser(req, res, next) {
    try {
      const userData = req.body;
      const result = await UserCreator.createUser(userData);
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = UserController;