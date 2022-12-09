export const config: CodeceptJS.MainConfig = {
  tests: './*/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in'
    },
    JSONResponse: {},
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
