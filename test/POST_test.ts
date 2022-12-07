const fs = require('fs');

Feature('POST tests');

Scenario('Verify creating new user', async ({ I }) => {
	await I.createNewUser();
	I.seeResponseCodeIsSuccessful();
});

Scenario('Verify uploading a file', async ({ I }) => {
	const form = I.createFormData('attachment', fs.createReadStream('test/fixtures/test_image.png'));
	
	await I.sendPostRequest('https://httpbin.org/post', form);
	I.seeResponseCodeIsSuccessful();
});
