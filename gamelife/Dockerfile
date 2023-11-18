
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build

FROM nginx:alpine
RUN mkdir /app
COPY --from=build-stage /app/dist/gamelife/ /app
COPY nginx.conf /etc/nginx/nginx.conf
