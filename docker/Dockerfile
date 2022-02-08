FROM peternguyentr/node-java-chrome:latest

# Fix certificate issues
RUN apt-get update --no-install-recommends && \
    apt-get -y install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

WORKDIR /app
COPY . .

RUN npm install

CMD ["/app/docker/run-tests.sh"]
