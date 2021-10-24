# mevn-stack-docker-example

## How to run

### Prerequisite

[Docker](https://www.docker.com/products/docker-desktop)

### Instructions

To run the docker containers:

- change mongo.example.env to mongo.env and add the default username/password

### Commands

> To run the docker container in development mode, use:

```
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```

> To run the docker container in production mode, use:

```
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```

> To stop and remove the docker containers, use:

```
docker-compose down
```

## Todo

- ~~Add mongodb container and connect it with the backend~~
- ~~Configure different production and development environment~~

## Credits

Great tutorials:

> Learn Docker - DevOps with Node.js & Express

- https://youtu.be/9zUHg7xjIqQ
  > Vue 3 with TypeScript Tutorial (playlist)
- https://youtu.be/JfI5PISLr9w
  > TypeScript in 100 Seconds
- https://youtu.be/zQnBQ4tB3ZA
