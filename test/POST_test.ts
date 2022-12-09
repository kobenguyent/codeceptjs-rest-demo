const fs = require('fs');

Feature('POST tests');

Scenario('Verify creating new user', async ({ I }) => {
	const user = await I.have('user', null, null);
	I.assertNotEqual(user.id, undefined);
});

Scenario('Verify uploading a file', async ({ I }) => {
	const form = I.createFormData('attachment', fs.createReadStream('test/fixtures/test_image.png'));
	
	await I.sendPostRequest('https://httpbin.org/post', form);
	I.seeResponseCodeIsSuccessful();
});
