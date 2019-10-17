#!/usr/bin/env bash

VERSION=${1:-latest}

echo "Pulling image ${VERSION}"
mkdir allure-results

docker run --rm \
    -v "$(pwd)"/allure-results:/app/allure-results \
    peterngtr/rest-demo:${VERSION}

status=$?

echo "Final status ${status}"
exit ${status}
