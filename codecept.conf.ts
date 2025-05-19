import {defaultHeaders} from "./fixtures/constants";

export const config: CodeceptJS.MainConfig = {
  tests: './*/*_test.ts',
  output: './output',
  emptyOutputFolder: true,
  helpers: {
    REST: {
      endpoint: 'https://reqres.in',
      timeout: 30_000,
      onRequest: (request) => {
        request.headers = {...request.headers, ...defaultHeaders };
      }
    },
    AllureReport: {
      require: './helpers/allure-report.helper.ts'
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
          create: (data) => ({ method: 'POST',  url: '/api/users', data, headers: { ...defaultHeaders } }),
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
