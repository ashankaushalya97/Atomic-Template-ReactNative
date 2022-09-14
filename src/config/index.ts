import dev from './env/env.dev';

const config = {
  appName: 'AtomicSample',
  env: dev.BASE_URL,

  api: {
    domains: {
      users: 'users',
    },
  },
};

export default config;