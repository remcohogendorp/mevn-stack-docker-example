FROM node:14 as base
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./

FROM base as dev
ENV PORT 5000
EXPOSE $PORT
CMD ["npm","run","serve"]

FROM base as builder
RUN npx tsc

FROM node:14 as prod
WORKDIR /app
COPY --from=builder /app/package.json ./
RUN npm install --only=prod
COPY --from=builder /app/dist ./
ENV PORT 5000
EXPOSE $PORT
CMD ["node","index.js"]
# CMD ["sleep", "1d"]