FROM node:12.18.2-alpine

WORKDIR /app

COPY . .
RUN yarn

RUN rm -rf dist
RUN yarn build


## Create nginx image

FROM nginx:1.19.8-alpine

RUN apk --no-cache add curl bash

RUN curl -L "https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-$(uname -s)-$(uname -m)" -o envsubst && \
  chmod +x envsubst && \
  mv envsubst /usr/local/bin

WORKDIR /app

COPY ./infra/entrypoint.sh .
COPY ./infra/nginx.template .
COPY --from=0 /app/dist/* /usr/share/nginx/html/

ENTRYPOINT ["/app/entrypoint.sh"]
