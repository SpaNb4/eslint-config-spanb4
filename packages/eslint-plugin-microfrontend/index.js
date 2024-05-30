module.exports = {
  rules: {
    'no-js-date': require('./rules/no-js-date'),
  },
  configs: {
    recommended: {
      plugins: ['@spanb4/microfrontend'],
      rules: {
        '@spanb4/microfrontend/no-js-date': 'error',
      },
    },
  },
};
