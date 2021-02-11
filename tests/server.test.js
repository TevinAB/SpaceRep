const request = require('supertest');
const { app } = require('../server');
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Test get request to server
describe('get requests', () => {
  beforeAll(async () => {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  });

  it('should get items from db ', async (done) => {
    const res = await request(app).get('/api/items');
    expect(res.status).toBe(200);
    done();
  });
});
