const UserReader = require('../../module/user/model/read');
const AuthenticationManager = require('../auth');

class AuthMiddleWare{
  
    static async login(req, res, next) {
        try {
          const {email, password} = req.body;
          const user = await UserReader.getUsersByEmailAndPassword(email, password);
          if (!user) {
            res.status(401).end();
          } else {
            const payload = {
              id: user.id,
              email: user.email,
            };
            const jwt = AuthenticationManager.getJwtToken(payload);
            res.cookie('token', jwt.token, {
              httpOnly: true,
              maxAge: jwt.expirySecond * 1000
            }).end();
          }
        } catch (error) {
          res.status(500).send(error.message);
        }
      }
}module.exports = AuthMiddleware;