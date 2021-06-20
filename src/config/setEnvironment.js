import { NODE_ENV } from './globals';

require('dotenv').config({ path: `src/config/env/${NODE_ENV}.env` });

const { BASE_URL_NODE, BASE_URL_AWS } = process.env;

const setEnvironmentForNode = (sm) => ( NODE_ENV === 'prod' && sm === 'nl'
  ? BASE_URL_NODE.replace('SM', `${sm}02`)
  : BASE_URL_NODE.replace('SM', sm));

const setEnvironmentForAws = () => BASE_URL_AWS;

export { setEnvironmentForNode, setEnvironmentForAws };