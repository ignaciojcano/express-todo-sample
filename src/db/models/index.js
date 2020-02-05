const config = require('config');
const { Sequelize, DataTypes } = require('sequelize');
const User = require('./user');
const Todo = require('./todo');

const sequelize = new Sequelize(config.get('sequelize.uri'), ({ ...config.get('sequelize.options') }));

const models = {
  User: User(sequelize, DataTypes),
  Todo: Todo(sequelize, DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
