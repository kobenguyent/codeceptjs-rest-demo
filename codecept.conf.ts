export const config: CodeceptJS.MainConfig = {
  tests: './*/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in'
    },
    JSONResponse: {},
    ExpectHelper: {
      require: 'codeceptjs-expect'
    },
    ApiDataFactory: {
      endpoint: "https://reqres.in",
      cleanup: false,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      factories: {
        user: {
          factory: "./factories/user",
          create: (data) => ({ method: 'POST',  url: '/api/users', data })
        },
      }
   }
  },
  include: {
    I: './stepObjects/custom.steps.ts'
  },
  name: 'codeceptjs-rest-demo',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  }
}
