const { actor } = require('codeceptjs');
const faker = require('faker');
import ex from 'codeceptjs-expectwrapper';
const FormData = require('form-data');

export = function () {
    return actor({
        async createNewUser(userData:object) {
            let payload = userData || {
                name: faker.name.firstName(),
                job: 'leader'
            };

            return this.sendPostRequest('/api/users', payload);
        }, 
        createFormData(key, value) {
            let form = new FormData();
            form.append(key, value);
            return form;
        }
    , ...ex});
}
