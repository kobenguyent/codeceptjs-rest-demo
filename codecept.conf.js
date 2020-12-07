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
		ExpectWrapper: {
			require: './ExpectWrapper.ts'
		}
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
		}
	}
};
