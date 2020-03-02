[![Greenkeeper-Abzeichen](https://badges.greenkeeper.io/PeterNgTr/codeceptjs-rest-demo.svg)](https://greenkeeper.io/)[](https://greenkeeper.io/)[](https://greenkeeper.io/)
[![Codacy-Abzeichen](https://api.codacy.com/project/badge/Grade/bb3182c5d5014093be06ffbd4bf7eb6f)](https://www.codacy.com/manual/PeterNgTr/codeceptjs-rest-demo?utm_source=github.com&utm_medium=referral&utm_content=PeterNgTr/codeceptjs-rest-demo&utm_campaign=Badge_Grade)[](https://www.codacy.com/manual/PeterNgTr/codeceptjs-rest-demo?utm_source=github.com&utm_medium=referral&utm_content=PeterNgTr/codeceptjs-rest-demo&utm_campaign=Badge_Grade)[](https://www.codacy.com/manual/PeterNgTr/codeceptjs-rest-demo?utm_source=github.com&utm_medium=referral&utm_content=PeterNgTr/codeceptjs-rest-demo&utm_campaign=Badge_Grade) [![Build-Status](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo.svg?branch=master)](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo)[](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo)[](https://travis-ci.org/PeterNgTr/codeceptjs-rest-demo)
[![Codefresh-Build-Status](https://g.codefresh.io/api/badges/pipeline/peterngtr/codeceptjs-rest-demo%2Frun%20tests?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWQ3MGQyM2FlYjI1NmUwNWY0YmIxMGJm.MkIjlyFpgSMJUMUhGVgUc_ysyVxAdsWyoR4YktKRpK4&type=cf-1)](https%3A%2F%2Fg.codefresh.io%2Fpipelines%2Frun%20tests%2Fbuilds%3FrepoOwner%3DPeterNgTr%26repoName%3Dcodeceptjs-rest-demo%26serviceName%3DPeterNgTr%252Fcodeceptjs-rest-demo%26filter%3Dtrigger%3Abuild%7EBuild%3Bbranch%3Amaster%3Bpipeline%3A5de8e714d608cc1c0b490c01%7Erun%20tests)[](https%3A%2F%2Fg.codefresh.io%2Fpipelines%2Frun%20tests%2Fbuilds%3FrepoOwner%3DPeterNgTr%26repoName%3Dcodeceptjs-rest-demo%26serviceName%3DPeterNgTr%252Fcodeceptjs-rest-demo%26filter%3Dtrigger%3Abuild%7EBuild%3Bbranch%3Amaster%3Bpipeline%3A5de8e714d608cc1c0b490c01%7Erun%20tests)[](https%3A%2F%2Fg.codefresh.io%2Fpipelines%2Frun%20tests%2Fbuilds%3FrepoOwner%3DPeterNgTr%26repoName%3Dcodeceptjs-rest-demo%26serviceName%3DPeterNgTr%252Fcodeceptjs-rest-demo%26filter%3Dtrigger%3Abuild%7EBuild%3Bbranch%3Amaster%3Bpipeline%3A5de8e714d608cc1c0b490c01%7Erun%20tests)

# Einführung

Dieses Projekt zeigt, wie CodeceptJS mit dem REST-Helfer verwendet wird.

## Wie benutzt man

Dies erfolgt mit CodeceptJS [https://codecept.io/](https://codecept.io/)

### Technik

Dieser Test verwendet eine Reihe von Open Source-Projekten, um ordnungsgemäß zu funktionieren:

* [https://nodejs.org/en/](https://nodejs.org/en/) - Ereignis-E / A für das Backend * [https://codecept.io/](https://codecept.io/) - CodeceptJS * [https://reqres.in/](https://reqres.in/) - Endpunkte, die in diesem Projekt verwendet werden

### Installation

Dazu muss [Node.js](https://nodejs.org/) v8 + ausgeführt werden.

Installieren Sie die Abhängigkeiten und devDependencies.

```sh
cd codeceptjs-rest-demo
npm i
```

### So lösen Sie API-Tests aus

Um alle API-Tests auszuführen, geben Sie einfach ein

```sh
npm test
```

Beispielausgabe

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
