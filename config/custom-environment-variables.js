module.exports = {
  server: {
    port: 'PORT',
  },
  intuit: {
    clientId: 'INTUIT_CLIENT_ID',
    clientSecret: 'INTUIT_CLIENT_SECRET',
  },
  sequelize: {
    uri: 'DATABASE_URL',
    options: {
      dialectOptions: {
        ssl: 'DATABASE_SSL',
      },
    },
  },
};
