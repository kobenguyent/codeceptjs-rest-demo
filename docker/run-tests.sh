#!/usr/bin/env bash

npm run load-test && npx codeceptjs run --steps
ls report