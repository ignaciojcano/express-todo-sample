module.exports = {
  env: process.env.NODE_ENV,
  server: {
    port: 8000,
  },
  sequelize: {
    uri: 'postgres://todos:todos@postgres:5432/todos',
    options: {
      dialect: 'postgres',
      dialectOptions: {
        ssl: process.env.NODE_ENV === 'production',
      },
      logging: false,
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
