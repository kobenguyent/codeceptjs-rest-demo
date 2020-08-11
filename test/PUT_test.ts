const expect = require('chai').expect;
const faker = require('faker');
const { I } = inject();
let userData;

Feature('PUT tests');

Before(() => {
	userData = {
		name: faker.name.firstName(),
		job: 'leader'
	};

	I.sendPostRequest('/api/users', userData);
});

Scenario('Verify creating new user', async () => {
	userData.name = faker.name.firstName();
	const res = await I.sendPutRequest('/api/users', userData);
	expect(res.data.name).to.eql(userData.name);
});
