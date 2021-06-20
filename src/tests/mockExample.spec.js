import { getFirstOne } from "../services/mockReq";
import axios from "axios";

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      species: ['https://swapi.dev/api/species/2/'],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'https://swapi.dev/api/people/2/'
    }
  });

  const response = await getFirstOne();

  expect(response.name).toBe('C-3PO')
  expect(response.height).toBe('167')
  expect(response.mass).toBe('75')
  expect(response.hair_color).toBe('n/a')
  expect(response.skin_color).toBe('gold')
  expect(response.eye_color).toBe('yellow')
  expect(response.birth_year).toBe('112BBY')
  expect(response.species).toEqual(['https://swapi.dev/api/species/2/'])
  expect(response.created).toBe('2014-12-10T15:10:51.357000Z')
  expect(response.edited).toBe('2014-12-20T21:17:50.309000Z')
  expect(response.url).toBe('https://swapi.dev/api/people/2/')
});