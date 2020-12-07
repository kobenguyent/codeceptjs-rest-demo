const { actor } = require('codeceptjs');
const faker = require('faker');

export = function () {
    return actor({
        async createNewUser(userData:object) {
            let payload = userData || {
                name: faker.name.firstName(),
                job: 'leader'
            };

            return this.sendPostRequest('/api/users', payload);
        }
    });
}
