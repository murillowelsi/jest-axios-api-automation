import baseUrlNode from '../config/baseUrlNode';

async function getHealthCheck () {
  try {
    const response = await baseUrlNode({
      method: "get",
      url: "/h34lthch3ck",
    });

    return response
    
  } catch (error) {
    console.error(error);
  }
};


export { getHealthCheck }