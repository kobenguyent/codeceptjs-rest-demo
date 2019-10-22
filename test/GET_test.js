const expect = require('chai').expect;
const {I} = inject();

Feature('GET tests');

Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	expect(res.status).to.eql(200);
});

Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/api/users/266');
	expect(res.status).to.eql(404);
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	//to get the reponse data, use res.data.data
	expect(res.data.data.id).to.eql(2);
});

Scenario('Verify getting list of users', async () => {
	const res = await I.sendGetRequest('/api/users?page=2');
	//to get the reponse data, use res.data.data
	expect(res.data.data[0].id).to.eql(7);
});

Scenario('Verify getting a single user', async () => {
	const res = await I.sendGetRequest('/api/users/2');
	//to get the reponse data, use res.data.data
	expect(res.data.data.id).to.eql(2);
});
