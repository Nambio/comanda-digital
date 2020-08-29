FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM alpine:3.11
COPY nginx-custom.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/comanda-digital /usr/share/nginx/html