const UserReader = require('../../module/user/models/read');
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
        static jwtTokenValidation(req, res, next) {
            try {
              const jwtToken = req.cookies.token;
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
      }

      module.exports = AuthMiddleWare;