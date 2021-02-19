require('ts-node/register');

exports.config = {
	tests: './*/*_test.ts',
	output: './output',
	helpers: {
		REST: {
			endpoint: 'https://reqres.in',
			onRequest: () => {
				//request.headers.auth = "123";
			}
		},
	},
	include: {
		I: './steps_file.ts'
	},
	bootstrap: null,
	mocha: {},
	name: 'codeceptjs-rest-demo',
	plugins: {
		allure: {
			outputDir: 'report',
			enabled: true
		},
		testrail: {
			require: 'codeceptjs-testrail',
			host: 'https://thanhtamara.testrail.io',
			user: 'thanh.nguyen+testrail@tamara.co',
			password: process.env.TR,
			suiteId: 1,
			projectId: 1,
			enabled: true
		}
	}
};
