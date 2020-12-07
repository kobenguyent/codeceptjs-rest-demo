export {};
const { I } = inject();

Feature('GET tests');

Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	I.assertEqual(res.status, 200);
});

Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/api/users/266');
	I.assertEqual(res.status, 404);
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	//to get the reponse data, use res.data.data
	I.assertEqual(res.data.data.id, 2);
});

Scenario('Verify getting list of users', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	//to get the reponse data, use res.data.data
	I.assertEqual(res.data.data[0].id, 7);
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	//to get the reponse data, use res.data.data
	I.assertEqual(res.data.data.id, 2);
});
