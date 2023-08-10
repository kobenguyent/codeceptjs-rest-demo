import { userSteps } from './index';

const faker = require('faker');
const FormData = require('form-data');

export = () => {
    return actor({
        async createNewUser(userData?:object) {
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
        },
        ...userSteps
    });
}
