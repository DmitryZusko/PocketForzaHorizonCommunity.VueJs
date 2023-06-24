const getBaseUrl = () => {
  return process.env.BASE_URL;
};

const envHandler = {
  getBaseUrl,
};

export default envHandler;
