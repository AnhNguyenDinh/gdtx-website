const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
  it('GET /api/v1/health should return ok', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('POST /api/v1/auth/register should validate input', async () => {
    const res = await request(app).post('/api/v1/auth/register').send({});
    expect(res.statusCode).toBe(422);
    expect(res.body.errors).toBeDefined();
  });
});
