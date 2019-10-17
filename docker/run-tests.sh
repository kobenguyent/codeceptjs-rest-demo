#!/usr/bin/env bash

npx codeceptjs run --steps
npx allure generate output -o allure-results
ls allure-results