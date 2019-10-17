#!/usr/bin/env bash

npx codeceptjs run --steps
npx allure generate app/output -o app/report
ls app/report