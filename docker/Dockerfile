FROM peternguyentr/node-java-chrome:latest

# Fix certificate issues
RUN apt-get update --no-install-recommends && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

COPY codecept.conf.js /app/
COPY package.json /app/
COPY test /app/tests
COPY load-tests /app/load-tests
COPY docker/run-tests.sh /app/docker/

WORKDIR /app
RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/docker/run-tests.sh"]