#!/bin/bash

cp /usr/share/nginx/html/client.html /usr/share/nginx/html/client-tmp.html
cp /usr/share/nginx/html/admin.html /usr/share/nginx/html/admin-tmp.html
envsubst < /usr/share/nginx/html/client-tmp.html > /usr/share/nginx/html/client.html
envsubst < /usr/share/nginx/html/admin-tmp.html > /usr/share/nginx/html/admin.html

envsubst < /app/nginx.template > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'
