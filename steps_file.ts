const { actor } = require('codeceptjs');
const faker = require('faker');
import ex from 'codeceptjs-expectwrapper';

export = function () {
    return actor({
        async createNewUser(userData:object) {
            let payload = userData || {
                name: faker.name.firstName(),
                job: 'leader'
            };

            return this.sendPostRequest('/api/users', payload);
        }
    , ...ex});
}
