import { getHealthCheck } from '../services/HealthCheckService';

describe('GET /h34lthch3ck', () => {
  let response

  beforeAll(async() => {
    response = await getHealthCheck()
  })

  it('THEN I shold see the results @smoke', () => {
    expect(response.status).toBe(200)
  })
})