## Setup and Run

A few ways to get started, pick the one you're most comfortable with.

All approaches would require a set of environment variables that will be given to you in the problems email:

```bash
PGHOST=
PGPORT=
PGDATABASE=
PGUSER=
PGPASSWORD=
```

0. Clone this repository
1. Install Node.js dependencies `$ npm install`
2. Set appropriate PostgreSQL environment variables according to https://www.postgresql.org/docs/9.6/static/libpq-envars.html
3. Run `$ npm run dev` to start the server and by default it should now be listening on port `5555`.
4. In the same project directory and from a different terminal window, Run `$ npm run client` to start the client side
5. Open your browser and go to `localhost:3000`

