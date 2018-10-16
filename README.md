## Setup and Run

Implement Postgres environment setup:

```bash
PGHOST=work-samples-db.cx4wctygygyq.us-east-1.rds.amazonaws.com
PGPORT=5432
PGDATABASE=work_samples
PGUSER=readonly
PGPASSWORD=w2UIO@#bg532!
```

0. Clone this repository
1. Install Node.js dependencies `$ npm install`
2. Set appropriate PostgreSQL environment variables according to https://www.postgresql.org/docs/9.6/static/libpq-envars.html
3. Run `$ npm run dev` to start the server and by default it should now be listening on port `5555`.
4. In the same project directory and from a different terminal window, Run `$ npm run client` to start the client side
5. Open your browser and go to `localhost:3000`

