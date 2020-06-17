import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 10,
    duration: '6s',
  };

export default function() {
  var url = 'https://reqres.in/api/users?page=2';

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let response = http.get(url, params);

  check(response, {
    'is status 200': r => r.status === 200,
  });
}