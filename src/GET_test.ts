const { I } = inject();

Feature('GET tests');

Scenario('Verify a successful call', async () => {
	await I.getUserPerPage(2);
	I.seeResponseCodeIsSuccessful();
	I.seeResponseContainsJson({page:2,per_page:6})
});

Scenario('Verify a not found call', async () => {
	await I.getUserById(266);
	I.seeResponseCodeIsClientError();
});

Scenario('Verify getting a single user', async () => {
	const res = await I.getUserById(2);
	await I.expectEqual(res.data.data.id, 2);
});

Scenario('Verify getting list of users', async () => {
	const res = await I.getUserPerPage(2);
	await I.expectEqual(res.data.data[0].id, 7);
});
