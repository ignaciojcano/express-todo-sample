
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    text: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'user_id',
      },
    },
  }, {});
  Todo.associate = (models) => {
    Todo.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  };
  return Todo;
};
