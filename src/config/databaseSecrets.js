module.exports =
{
  database:
 {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER ,
  database: process.env.DATABASE_DB,
  password: process.env.DATABASE_PASSWORD ,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  },
jwt:{
  secret: process.env.JWT_SECRET,
  expirySecond: process.env.JWT_EXPIRY_SECOND,
}

};