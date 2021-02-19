export {};
const { I } = inject();

Feature('GET tests');

Scenario('Verify a successful call @C2', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	await I.assertEqual(res.status, 200);
});

Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/api/users/266');
	await I.assertEqual(res.status, 404);
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	//to get the reponse data, use res.data.data
	await I.assertEqual(res.data.data.id, 2);
});

Scenario('Verify getting list of users', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	//to get the reponse data, use res.data.data
	await I.assertEqual(res.data.data[0].id, 7);
});
