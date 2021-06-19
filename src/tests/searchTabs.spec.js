import { getSearchTabs } from '../services/SearchTabs';

describe('GET /v1/searchtabs', () => {
  let response

  beforeAll(async() => {
    response = await getSearchTabs()
  })

  it('THEN it should have a 200 status code', () => {
    expect(response.status).toBe(200)
  });

  it('AND headers are correct', () => {
  })
})