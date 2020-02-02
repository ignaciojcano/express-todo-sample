module.exports = {
  env: process.env.NODE_ENV,
  server: {
    port: 8000,
    saltRounds: 10,
    secret: 'themostinterestingsecretintheworld',
  },
  sequelize: {
    uri: 'postgres://todos:todos@localhost:5432/todos',
    options: {
      dialect: 'postgres',
      dialectOptions: {
        ssl: process.env.NODE_ENV === 'production',
      },
      // logging: true,
      define: {
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true,
      },
    },
  },
};
