require('dotenv').config()


const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const node_env = process.env.NODE_ENV;


module.exports = {
  development: {
    databases: {
      rest: {
        database,
        username,
        password,
        host,
        port,
        dialect: 'mysql',
      },
    },
  },
  production: {
    databases: {
      rest: {
        database,
        username,
        password,
        host,
        port,
        dialect: 'mysql',
        
      },
    },
  },
};
