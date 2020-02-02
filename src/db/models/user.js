
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    tableName: 'users',
  });
  User.associate = (models) => {
    User.hasMany(models.Todo, {
      foreignKey: 'user_id',
    });
  };
  return User;
};
