# Nest.js passport.js with session

Basic example of nestjs passport authentication on sessions

## Installation

```bash
yarn install
```

## Running the app

```bash
yarn start:dev
```

And open
```
http://localhost:3000
```

## Routes:

- [GET] `/`
- [GET] `/profile` -> Only for authenticated users
- [POST] `/auth/login`
- [POST] `/auth/logout`


## Login process

Request -> login.guard -> custom.strategy -> auth.service -> User || null -> controller || UnauthorizedException
