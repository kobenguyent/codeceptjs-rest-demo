export {};
const { I } = inject();

Feature('GET tests');

Scenario('Verify a successful call', async () => {
	await I.sendGetRequest('/api/users?page=2');
	I.seeResponseCodeIsSuccessful();
	I.seeResponseContainsJson({page:2,per_page:6})
});

Scenario('Verify a not found call', async () => {
	I.sendGetRequest('/api/users/266');
	I.seeResponseCodeIsClientError();
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	await I.assertEqual(res.data.data.id, 2);
});

Scenario('Verify getting list of users', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	await I.assertEqual(res.data.data[0].id, 7);
});
