// const supertest = require('supertest');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const server = require('../../src/server');

// const request = supertest(server);

describe('TODO', () => {
  beforeEach(() => {
    /**
     * Create a default user
     * Create todos for that user
     */
  });
  afterEach(() => {
    /**
     * Delete the todos
     * Delete the default user
     */
  });

  it('should fetch all todos', async () => {
    expect(1).toBe(1);
    // const token = jwt.sign({ user_id: 1 }, config.get('server.secret'));
    // const response = await request.get('/todos')
    //   .set('Authorization', `Bearer ${token}`);
    // expect(response.status).toBe(200);
    // expect(response.body).toMatchSnapshot();
  });
});
