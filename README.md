# Description

this is messenger to use with requests

# How to use

```
(GET) site - to get unread messages
(POST) site - to send message, body should be {"sender": "name", "message": "text"}
```

# Functional requirements
- [x] send message by POST
- [x] get unread messages by GET
- [ ] keep messages and users in db
- [ ] remove them when read
- [ ] check if recipient exisits on send
- [x] check POST body
- [x] separate sender and recipient messages class
- [ ] authenticate and authorize user
- [x] dockerfile
- [ ] docker-compose
- [x] add CORS

# Project setup

```bash
$ npm install
```

# Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.