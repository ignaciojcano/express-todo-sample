module.exports = {
  server: {
    port: 'PORT',
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
