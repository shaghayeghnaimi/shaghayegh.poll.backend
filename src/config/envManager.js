
module.exports = {
    database: {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      databaseName: process.env.DATABASE_MAIN
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expirySecond: process.env.JWT_EXPIRY_SECOND,
    }
  };
  