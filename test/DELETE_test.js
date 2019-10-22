const expect = require("chai").expect;
const faker = require("faker");
const {I} = inject();
let userData;
let createdUser;

Feature("DELETE tests");

Before(async () => {
    userData = {
        name: faker.name.firstName(),
        job: "leader"
    };

    createdUser = await I.sendPostRequest("/api/users", userData);
});

Scenario("Verify deleting a user", async () => {
    const res = await I.sendDeleteRequest(`/api/users/${createdUser.data.id}`);
    expect(res.status).to.eql(204);
    expect(res.data).to.be.empty;
});
