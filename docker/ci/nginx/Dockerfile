FROM nginx:alpine

WORKDIR "/application"

COPY ./dist /application
COPY /docker/ci/nginx/nginx.conf /etc/nginx/nginx.conf
