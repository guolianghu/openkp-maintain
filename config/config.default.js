'use strict';

module.exports = appInfo => {
  const config = {
    static: {
      prefix: '/',
      maxAge: 0,
      cacheControl: 'no-cache'
    }
  };

  // should change to your own
  config.keys = appInfo.name + '_1496815536116_5245';

  // add your config here

  return config;
};
