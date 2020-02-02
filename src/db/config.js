const config = require('config');
const url = require('url');

const options = config.get('sequelize.options');
const postgresUrl = url.parse(config.get('sequelize.uri'));

const connection = {
  username: postgresUrl.auth ? postgresUrl.auth.split(':')[0] : undefined,
  password: postgresUrl.auth ? postgresUrl.auth.split(':')[1] : undefined,
  database: postgresUrl.pathname.split('/')[1],
  host: postgresUrl.hostname,
  port: postgresUrl.port,
};
module.exports = {
  development: { ...options, ...connection },
  test: { ...options, ...connection },
  production: { ...options, ...connection },
};
