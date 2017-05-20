const path = require('path')
const connectionPATH = process.env.CONNECTION_PATH || ''


module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${connectionPATH}localhost/hacknet_db`,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
