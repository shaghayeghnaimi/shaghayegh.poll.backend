const UserReader = require('../../module/user/models/read');
const AuthenticationManager = require('../auth');
const bcrypt = require("bcrypt");


class AuthMiddleware {

  static async login(req, res, next) {
    try {
      const {email, pass} = req.body;
      const user = await UserReader.getUsersByEmailAndPassword(email, pass);
      if (!user) {
        res.status(401).end();
      } else {
        const dbpass = user.pass;
        const passEqual = await bcrypt.compare(pass, dbpass);
        if(passEqual){
          const payload = {
            id: user.id,
            email: user.email,
          };
        
        const jwt = AuthenticationManager.getJwtToken(payload);
        res.send(jwt);
        }else{
          res.status(403).end("Invalid User!");
        }
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  
  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = AuthMiddleware.parseAuthorizationToken(req.headers.authorization);
      if (!jwtToken) {
        throw new Error("Token not exists!");
      }
      
      const payload = AuthenticationManager.getJwtTokenPayload(jwtToken);
      req.jwt_payload = payload;
      
      next();
    } catch (e) {
      res.status(401).end();
    }
  }
  
  static parseAuthorizationToken(authorization) {
    if (!authorization) {
      throw new Error('Authorization Token not found!');
    }
    const bearer = authorization.split(" ");
    return bearer[1];
   
  }
}

module.exports = AuthMiddleware;