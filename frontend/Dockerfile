FROM node:14 as base
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./

FROM base as dev
ENV PORT 4000
EXPOSE $PORT
CMD ["npm","run","serve"]

FROM base as builder
ARG VUE_APP_BACKEND_IP
ARG VUE_APP_BACKEND_PORT
ENV VUE_APP_BACKEND_IP=$VUE_APP_BACKEND_IP
ENV VUE_APP_BACKEND_PORT=$VUE_APP_BACKEND_PORT
RUN npm run build

FROM nginx:stable-alpine as prod
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]