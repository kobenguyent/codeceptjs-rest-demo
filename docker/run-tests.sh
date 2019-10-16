#!/usr/bin/env bash

npx codeceptjs run --steps
npx allure generate output -c -o report
ls ./report