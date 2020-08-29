FROM node:12.18.3 as node
WORKDIR /comanda-digital
COPY package.json /comanda-digital/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /comanda-digital/
ARG env=prod
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=node /comanda-digital/dist/comanda-digital /var/www/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY ./site-enable-default /etc/nginx/sites-enabled/default