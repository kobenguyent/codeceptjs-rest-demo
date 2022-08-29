const faker = require('faker');
const { I } = inject();
let userData:any;
let id:any;

Feature('PUT tests');

Before(async () => {
	userData = {
		name: faker.name.firstName(),
		job: 'leader'
	};

	const newUser = await I.createNewUser(userData);
	id = newUser.data.id;
});

Scenario('Verify creating new user', async () => {
	userData['name'] = faker.name.firstName();
	const res = await I.sendPutRequest(`/api/users/${id}`, userData);
	await I.assertEqual(res.data.name, userData['name']);
});
