import { SM } from '../config/globals';
import { getRefreshToken } from "../services/TokenService";

describe('RefreshToken', () => {
  describe('GET /requestToken', () => {
    (SM === 'de' ? it.skip : it)('should GET fresh token', async () => {

      const response = await getRefreshToken()
      console.log(response.headers['mw-token'])

      expect(response.status).toBe(200)
    })
  })
})
