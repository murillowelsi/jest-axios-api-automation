import baseUrlNode from '../config/baseUrlNode';

async function getRefreshToken() {
  try {
    const response = await baseUrlNode({
      method: 'get',
      url: '/api/auth/requestToken',
      headers: {
        'Content-Type': 'application/json',
        'app-version': '12.8.0',
        'tui-app-img-bucket-size': 'medium',
        'device-os': 'ios',
        'correlation-id': '46c8dd96-05e2-44ef-92f3-22e1e974bac1',
        'app-name': 'tui-uk-th',
        'app-locale': 'en-GB',
        'tui-app-country': 'GB',
      },
      params: {
        id: 10388407,
        additionalInfo: 'Henry',
        departureDate: '2021-06-03'
      }
    });

    return response;
  } catch (error) {
    console.error(error);
  }

  return null;
}

async function getDeToken() {
  try {
    const response = await baseUrlNode({
      method: 'post',
      url: '/api/auth/userlogin',
      headers: {
        'Content-Type': 'application/json',
        'app-version': '12.8.0',
        'tui-app-img-bucket-size': 'medium',
        'device-os': 'ios',
        'correlation-id': '46c8dd96-05e2-44ef-92f3-22e1e974bac1',
        'app-name': 'tui-de-mt',
        'app-locale': 'de-DE',
        'tui-app-country': 'DE',
      },
      data: {
        username: 'jzbshhejbs@yahoo.com',
        password: 'testtest',
        withBookingSummaries: false
      }
    });

    return response;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export { getRefreshToken, getDeToken };
