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

### E2E Dashboard using Grafana/Prometheus

After generating Allure report, it would also come with data which we could use to send to time series database Prometheus for example.

What do you need?
- Docker installed
- Basic knowledge on how to set up the Dashboard on Grafana, query with Prometheus

To start the Grafana/Prometheus, run this command

```
cd docker && docker-compose up

➜  docker git:(master) ✗ docker-compose up
[+] Running 3/0
 ✔ Container docker-pushgateway-1  Created                                                                                                                                                                                                                                                                    0.0s 
 ✔ Container docker-grafana-1      Created                                                                                                                                                                                                                                                                    0.0s 
 ✔ Container docker-prometheus-1   Created                                                                                                                                                                                                                                                                    0.0s 
Attaching to docker-grafana-1, docker-prometheus-1, docker-pushgateway-1
docker-pushgateway-1  | ts=2023-08-08T09:49:48.904Z caller=main.go:86 level=info msg="starting pushgateway" version="(version=1.6.0, branch=HEAD, revision=2b1a354b9e6f2cfab172767cd3e26d92efa9dccf)"
docker-pushgateway-1  | ts=2023-08-08T09:49:48.904Z caller=main.go:87 level=info build_context="(go=go1.20.4, platform=linux/arm64, user=root@b93562bc57fd, date=20230525-11:20:38, tags=netgo)"
docker-pushgateway-1  | ts=2023-08-08T09:49:48.907Z caller=tls_config.go:274 level=info msg="Listening on" address=[::]:9091
docker-pushgateway-1  | ts=2023-08-08T09:49:48.907Z caller=tls_config.go:277 level=info msg="TLS is disabled." http2=false address=[::]:9091
docker-grafana-1      | logger=settings t=2023-08-08T09:49:49.087865552Z level=info msg="Starting Grafana" version=10.0.3 commit=eb8dd72637 branch=HEAD compiled=2023-07-25T17:55:59Z

```
Grafana is now accessible via http://localhost:3000/

One command to run tests and sending data to Prometheus

```
npm run test && npm run allure-reports-generate && npm run processData && npm run sendData
```

Set up your dashboard as your preference, for example

Some query for your references:

TCs per build:

```
sum by (build) ({__name__=~"e2e_tests_status_(passed|failed|broken)", build!="unknown"})
```

Execution time per build:

```
sum by (build) ({__name__="e2e_tests_time_duration", build!="unknown"})
```

![Screenshot 2023-08-09 at 10.30.37.png](assets%2FScreenshot%202023-08-09%20at%2010.30.37.png)