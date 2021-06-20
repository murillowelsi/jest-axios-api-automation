import axios from "axios";

async function getFirstOne() {
  const response = await axios.get('https://swapi.dev/api/people/2');
  return response.data;
}

export { getFirstOne };
