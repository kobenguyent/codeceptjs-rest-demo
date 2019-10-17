#!/usr/bin/env bash

VERSION=${1:-latest}

echo "Pulling image ${VERSION}"
mkdir allure-results
mkdir allure-report

docker run --rm \
    -v "$(pwd)"/allure-results:/app/allure-results \
    -v "$(pwd)"/allure-report:/app/allure-report \
    peterngtr/rest-demo:${VERSION}

status=$?

echo "Final status ${status}"
exit ${status}
