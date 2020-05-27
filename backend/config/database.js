const config = {
  development: {
    username: 'root',
    password: process.env.DB_USER_PASSWORD,
    database: 'fibonacci_storage_development',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};

module.exports = config;