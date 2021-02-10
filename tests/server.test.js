const request = require('supertest');
const { app } = require('../server');
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Test get request to server
describe('get requests', () => {
  it('should get items from db ', async (done) => {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Database connected');
      });
    const res = await request(app).get('/api/items');
    expect(res.status).toBe(200);
    done();
  });
});
