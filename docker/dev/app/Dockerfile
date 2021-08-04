FROM node:10.24.1-alpine

RUN apk add --no-cache git yarn \
    && yarn global add @vue/cli

WORKDIR "/var/www"

EXPOSE 8080

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]

CMD yarn serve
