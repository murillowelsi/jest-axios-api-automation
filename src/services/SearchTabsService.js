import baseUrlAws from '../config/baseUrlAws';

async function getSearchTabs() {
  try {
    const response = await baseUrlAws({
      method: 'get',
      url: '/v1/searchtabs',
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
    });

    return response;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export { getSearchTabs };
