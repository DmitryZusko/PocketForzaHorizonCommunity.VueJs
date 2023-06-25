const getBaseUrl = () => {
  return import.meta.env.VITE_SERVER_URL;
};

const envHandler = {
  getBaseUrl,
};

export default envHandler;
