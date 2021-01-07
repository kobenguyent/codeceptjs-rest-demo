export {};
const { I } = inject();
const FormData = require('form-data');
const fs = require('fs');
let form = new FormData();


Feature('POST tests');

Scenario('Verify creating new user', async () => {
	const res = await I.createNewUser();
	await I.assertEqual(res.status, 201);
});

Scenario('Verify uploading a file', async () => {
	form.append('attachment', fs.createReadStream('test/fixtures/test_image.png'));

	const res = await I.sendPostRequest('https://httpbin.org/post', form);
	await I.assertEqual(res.status, 200);
});
