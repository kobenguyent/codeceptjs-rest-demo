const expect = require('chai').expect;
const faker = require('faker');
const {I} = inject();
const FormData = require('form-data');
const fs = require('fs');
let userData;
let form = new FormData();


Feature('POST tests');

Scenario('Verify creating new user', async () => {
	userData = {
		name: faker.name.firstName(),
		job: 'leader'
	};

	const res = await I.sendPostRequest('/api/users', userData);
	expect(res.status).to.eql(201);
	expect(res.data.name).to.eql(userData.name);
});

Scenario('Verify uploading a file', async () => {
	form.append('attachment', fs.createReadStream('test/fixtures/test_image.png'));

	const res = await I.sendPostRequest('https://httpbin.org/post', form);
	expect(res.status).to.eql(200);
});
