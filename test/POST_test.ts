export {};
const { I } = inject();
const FormData = require('form-data');
const fs = require('fs');
let form = new FormData();


Feature('POST tests');

Scenario('Verify creating new user', async () => {
	await I.createNewUser();
	await I.seeResponseCodeIsSuccessful();
});

Scenario('Verify uploading a file', async () => {
	form.append('attachment', fs.createReadStream('test/fixtures/test_image.png'));

	await I.sendPostRequest('https://httpbin.org/post', form);
	await I.seeResponseCodeIsSuccessful();
});
