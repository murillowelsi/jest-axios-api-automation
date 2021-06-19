import { ENV } from "./globals";
require('dotenv').config({ path: `src/config/env/${ENV}.env` })

const BASE_URL_NODE = process.env.BASE_URL_NODE
const BASE_URL_AWS = process.env.BASE_URL_AWS

const setEnvironmentForNode = (sm) => {
    return ENV === 'prod' && sm === 'nl' ?
        BASE_URL_NODE.replace('SM', `${sm}02`) :
        BASE_URL_NODE.replace('SM', sm)
}

const setEnvironmentForAws = () => {
    return BASE_URL_AWS
}

export { setEnvironmentForNode, setEnvironmentForAws }