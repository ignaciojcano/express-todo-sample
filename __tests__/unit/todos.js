const { createTodo } = require('../../src/services/todos');

describe('TODO', () => {
  beforeEach(() => {});
  afterEach(() => {});

  it('should fetch all todos', async () => {
    const description = 'I am a todo';
    const todo = createTodo(description, 5);
    expect(todo.id).toBe(1);
    expect(todo.description).toBe(description);
    expect(todo.user).toBe(5);
  });
});
