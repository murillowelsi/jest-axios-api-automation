import { SM } from '../config/globals';
import { getDeToken } from "../services/TokenService";

describe('DEToken', () => {
  describe('GET /getDeToken', () => {
    (SM !== 'de' ? it.skip : it)('should GET DE fresh token', async () => {

      const response = await getDeToken()
      console.log(response.headers['mw-token'])

      expect(response.status).toBe(200)
    })
  })
})
