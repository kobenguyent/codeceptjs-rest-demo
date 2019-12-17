[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bb3182c5d5014093be06ffbd4bf7eb6f)](https://www.codacy.com/manual/PeterNgTr/codeceptjs-rest-demo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PeterNgTr/codeceptjs-rest-demo&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo.svg?branch=master)](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo)
[![Codefresh build status](https://g.codefresh.io/api/badges/pipeline/peterngtr/codeceptjs-rest-demo%2Frun%20tests?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWQ3MGQyM2FlYjI1NmUwNWY0YmIxMGJm.MkIjlyFpgSMJUMUhGVgUc_ysyVxAdsWyoR4YktKRpK4&date=1576575392079)](https://g.codefresh.io/api/badges/pipeline/peterngtr/codeceptjs-rest-demo%2Frun%20tests?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWQ3MGQyM2FlYjI1NmUwNWY0YmIxMGJm.MkIjlyFpgSMJUMUhGVgUc_ysyVxAdsWyoR4YktKRpK4&date=1576575392079)

# Introduction
This project demonstrates how to use CodeceptJS with REST helper.

## How to use
This is done using CodeceptJS <https://codecept.io/>

### Tech
This test uses a number of open source projects to work properly:

*<https://nodejs.org/en/> - evented I/O for the backend
*<https://codecept.io/> - CodeceptJS
*<https://reqres.in/> - Endpoints that are used in this porject

### Installation
This requires [Node.js](https://nodejs.org/) v8+ to run.

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
