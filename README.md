[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bb3182c5d5014093be06ffbd4bf7eb6f)](https://www.codacy.com/manual/PeterNgTr/codeceptjs-rest-demo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PeterNgTr/codeceptjs-rest-demo&amp;utm_campaign=Badge_Grade)[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This project demonstrates how to use CodeceptJS with REST helper.

## How to use

This is done using CodeceptJS <https://codecept.io/>

### Tech

This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://reqres.in/> - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies.

```sh
cd codeceptjs-rest-demo
npm i
```

### How to trigger API tests

To run all api tests just simply type

```sh
npm test
```

Example output

```sh
CodeceptJS v3.4.1 #StandWithUkraine
Using test root "/Users/thanh.nguyen/Desktop/codeceptjs-rest-demo"

DELETE tests --
  ✔ Verify deleting a user in 136ms
GET tests --
  ✔ Verify a successful call in 126ms
  ✔ Verify a not found call in 124ms
  ✔ Verify getting a single user in 180ms
  ✔ Verify getting list of users in 65ms
POST tests --
  ✔ Verify creating new user in 131ms
  ✔ Verify uploading a file in 5789ms
PUT tests --
  ✔ Verify creating new user in 118ms

  OK  | 8 passed   // 7s
```

### Report 
Allure report: https://kobenguyent.github.io/codeceptjs-rest-demo/
