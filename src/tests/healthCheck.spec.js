import { getHealthCheck } from '../services/HealthCheckService';

describe('HealthCheck', () => {
  describe('GET /h34lthch3ck', () => {
    it('status code should be 200', async () => {
      const response = await getHealthCheck();
      expect(response.status).toBe(200);
    });
  });
});
