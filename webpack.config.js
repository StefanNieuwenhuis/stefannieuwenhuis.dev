const environment = (process.env.NODE_ENV || 'development').trim();

module.exports = environment === 'development' ? require('./config/webpack.dev.config.js') : require('./config/webpack.prod.config.js');
