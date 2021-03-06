import { getSearchTabs } from '../services/SearchTabsService';

describe('SearchTabs', () => {
  describe('GET /v1/searchtabs', () => {
    it('status code should be 200', async () => {
      const response = await getSearchTabs();
      expect(response.status).toBe(200);
    });

    it.todo('headers are correct');
  });
});
