import { getHealthCheck } from '../services/HealthCheckService';

describe('GET /h34lthch3ck', () => {
  it('THEN I shold see the results @smoke', async () => {
    const { status } = await getHealthCheck()

    expect(status).toBe(200)
  })
})