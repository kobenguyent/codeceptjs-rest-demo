export {}
const faker = require('faker');
const { I } = inject();
let id:any;
let newUser:any;

Feature('PUT tests');

Before(async () => {
	newUser = await I.have('user', null, null);
	id = newUser.id;
});

Scenario('Verify creating new user', async () => {
	const newName = faker.name.firstName();
	newUser.name = newName;
	const res = await I.sendPutRequest(`/api/users/${id}`, newUser);
	await I.expectEqual(res.data.name, newName);
});
