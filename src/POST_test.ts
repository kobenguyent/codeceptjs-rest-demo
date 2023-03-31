export {}
const fs = require('fs');
const { I } = inject();

Feature('POST tests');

Scenario('Verify creating new user', async () => {
	const user = await I.have('user', null, null);
	I.expectNotEqual(user.id, undefined);
});

Scenario('Verify uploading a file', async () => {
	const form = I.createFormData('attachment', fs.createReadStream(`${process.cwd()}/src/fixtures/test_image.png`));

	await I.sendPostRequest('https://httpbin.org/post', form);
	I.seeResponseCodeIsSuccessful();
});
