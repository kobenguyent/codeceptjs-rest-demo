export {};
const { I } = inject();

Feature('GET tests');

Scenario('Verify a successful call', async () => {
	await I.sendGetRequest('/api/users?page=2');
	await I.seeResponseCodeIsSuccessful();
});

Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/api/users/266');
	await I.seeResponseCodeIsClientError();
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	await I.assertEqual(res.data.data.id, 2);
});

Scenario('Verify getting list of users', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	await I.assertEqual(res.data.data[0].id, 7);
});
