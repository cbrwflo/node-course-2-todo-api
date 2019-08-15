var env = process.env.NODE_ENV || 'development';

if (env === 'dev' || env === 'test') {
  var config = require(`./config.${env}.json`);
  var envConfig = config;

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
