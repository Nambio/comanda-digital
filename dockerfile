FROM node:12.18.3 as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /comanda-digital && mv ./node_modules ./comanda-digital

WORKDIR /comanda-digital

COPY . .

RUN npm run ng build -- --deploy-url=/envapp/ --prod


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /comanda-digital/dist /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]