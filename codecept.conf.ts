const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.ts'
  },
  name: 'codeceptjs-rest-demo',
  plugins: {
    allure: {
      outputDir: 'report',
      enabled: true
    }
  }
}
