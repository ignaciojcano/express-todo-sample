const { Todo } = require('../db/models');

const getTodos = async (user) => Todo.findAll({
  where: {
    user_id: user.id,
  },
});


const createTodo = (description, user) => ({
  id: 1,
  description,
  user,
});

module.exports = {
  getTodos,
  createTodo,
};
