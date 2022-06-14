const faker = require('faker');
const { I } = inject();
let userData:any;

Feature('PUT tests');

Before(async () => {
	userData = {
		name: faker.name.firstName(),
		job: 'leader'
	};

	await I.createNewUser(userData);
});

Scenario('Verify creating new user', async () => {
	userData['name'] = faker.name.firstName();
	const res = await I.sendPutRequest('/api/users/2', userData);
	await I.assertEqual(res.data.name, userData['name']);
});
