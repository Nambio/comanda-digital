FROM node:12.18.3 as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm build --prod

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=node /app/dist/comanda-digital /var/www/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf