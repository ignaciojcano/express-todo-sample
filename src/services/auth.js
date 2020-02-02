const config = require('config');
const { hashSync } = require('bcrypt');
const { User } = require('../db/models');

const findById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

const register = async (name, email, password) => {
  await User.create({
    name,
    email,
    password: hashSync(password, config.get('server.saltRounds')),
  });
};

module.exports = {
  register,
  findByEmail,
  findById,
};
