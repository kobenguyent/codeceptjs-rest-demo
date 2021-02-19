export {};
const { I } = inject();
let createdUser:any;

Feature('DELETE tests');

Before(async () => {
	createdUser = await I.createNewUser();
});

Scenario('Verify deleting a user @C1', async () => {
	let id = createdUser['data']['id'];
	const res = await I.sendDeleteRequest(`/api/users/${id}`);
	await await I.assertEqual(res.status, 204);
	await await I.assertEqual(res.data, '');
});
