#!/usr/bin/env bash

VERSION=${1:-latest}

echo "Pulling image ${VERSION}"
mkdir test_report

docker run --rm \
    -v "$(pwd)"/test_report:/app/output \
    peterngtr/rest-demo:${VERSION}

status=$?

echo "Final status ${status}"
exit ${status}
