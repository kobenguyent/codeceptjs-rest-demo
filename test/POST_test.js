const expect = require('chai').expect;
const faker = require('faker');
const {I} = inject();
let userData;

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
