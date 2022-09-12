[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bb3182c5d5014093be06ffbd4bf7eb6f)](https://www.codacy.com/manual/PeterNgTr/codeceptjs-rest-demo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PeterNgTr/codeceptjs-rest-demo&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo.svg?branch=master)](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo) [![Greenkeeper badge](https://badges.greenkeeper.io/PeterNgTr/codeceptjs-rest-demo.svg)](https://greenkeeper.io/)[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

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

This requires [Node.js](https://nodejs.org/) v12+ to run.

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
CodeceptJS v3.3.5 #StandWithUkraine
Using test root "/Users/tamara-thanh/Desktop/codeceptjs-rest-demo"

DELETE tests --
  ✔ Verify deleting a user in 976ms
GET tests --
  ✔ Verify a successful call in 588ms
  ✔ Verify a not found call in 978ms
  ✔ Verify getting a single user in 591ms
  ✔ Verify getting list of users in 583ms
POST tests --
  ✔ Verify creating new user in 942ms
  ✔ Verify uploading a file in 4343ms
PUT tests --
  ✔ Verify creating new user in 923ms

  OK  | 8 passed   // 12s
```
