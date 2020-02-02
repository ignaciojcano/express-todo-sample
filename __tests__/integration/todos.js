const supertest = require('supertest');
const server = require('../../src/server');

const request = supertest(server);

describe('TODO', () => {
  beforeEach(() => {});
  afterEach(() => {});

  it('should fetch all todos', async () => {
    const response = await request.get('/todos');
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });

  it('should create a todo', async () => {
    const response = await request.post('/todos')
      .send({
        text: 'I just got created',
      });
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });

  it('should fetch a todo', async () => {
    const response = await request.get('/todos/1');
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });

  it('should update a todo', async () => {
    const response = await request.put('/todos/1')
      .send({
        text: 'A new and updated text',
      });
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
});
