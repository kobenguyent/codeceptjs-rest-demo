export {};
const { I } = inject();
let createdUser:any;

Feature('DELETE tests');

Before(async () => {
	createdUser = await I.createNewUser();
});

Scenario('Verify deleting a user', async () => {
	let id = createdUser['data']['id'];
	const res = await I.sendDeleteRequest(`/api/users/${id}`);
	I.seeResponseCodeIsSuccessful();
	await I.assertEqual(res.data, '');
});
