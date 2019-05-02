# Introduction
Demo project demonstrates how to use CodeceptJS with REST helper.

# How to use
This is done using CodeceptJS https://codecept.io/

### Tech
This test uses a number of open source projects to work properly:

* https://nodejs.org/en/ - evented I/O for the backend
* https://codecept.io/ - CodeceptJS
* https://reqres.in/ - Endpoints that are used in this porject

### Installation
This requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
$ cd codeceptjs-rest-demo
$ npm i
```

### How to trigger API tests
To run all api tests just simply type

```sh
$ npm start
```

Example output
```sh
CodeceptJS v2.1.0
Using test root "/Users/thanhnguyen/Desktop/codeceptjs-rest-demo"

DELETE tests --
  ✔ Verify deleting a user in 414ms
GET tests --
  ✔ Verify a successful call in 404ms
  ✔ Verify a not found call in 204ms
  ✔ Verify getting a single user in 510ms
  ✔ Verify getting list of users in 513ms
  ✔ Verify getting a single user in 354ms
POST tests --
  ✔ Verify creating new user in 370ms
PUT tests --
  ✔ Verify creating new user in 426ms
  ```





