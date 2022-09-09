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
