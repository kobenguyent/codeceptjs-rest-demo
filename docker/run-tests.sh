#!/usr/bin/env bash

npx codeceptjs run --steps
npx allure generate ./output -o ./report
ls ./report