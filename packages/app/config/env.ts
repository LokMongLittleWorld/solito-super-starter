declare let process: {
  env: {
    ENVIRONMENT: string;
    REACT_APP_JWT_SECRET: string;
  };
};

export const ENV = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'development',
  REACT_APP_JWT_SECRET: process.env.REACT_APP_JWT_SECRET || '',
};
