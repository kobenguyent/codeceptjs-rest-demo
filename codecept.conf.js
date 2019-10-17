exports.config = {
  tests: './*/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in',
      onRequest: (request) => {
        //request.headers.auth = '123';
      }
   }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-rest-demo',
  plugins: {
    allure: {
      outputDir: 'allure-report',
      enabled: true
    }
  }
}