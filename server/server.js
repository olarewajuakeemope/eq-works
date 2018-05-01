import express from 'express'
import cors from 'cors'
import rateLimitter from './middleware/rateLimitter'
import { paginateQuery, handleQuery } from './middleware/queryHandlers'

const app = express()
const limitRate = rateLimitter()

// enable CORS
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['POST', 'GET'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type','Accept',
  ],
}))

// apply middleware
app.use('/stats/hourly', limitRate)

// setup routes
app.get('/', (req, res) => {
  res.send('Welcome to EQ Works 😎')
})

app.get('/events/hourly', (req, res, next) => {
  req.sqlTable = 'public.hourly_events'
  req.sqlQuery = `
    SELECT date, hour, events
    FROM public.hourly_events
    ORDER BY date, hour
  `
  return next()
}, paginateQuery)

app.get('/events/daily', (req, res, next) => {
  req.sqlTable = 'public.hourly_events'
  req.sqlQuery = `
    SELECT date, SUM(events) AS events
    FROM public.hourly_events
    GROUP BY date
    ORDER BY date
  `
  return next()
}, paginateQuery)

app.get('/stats/hourly', (req, res, next) => {
  req.sqlTable = 'public.hourly_stats'
  req.sqlQuery = `
    SELECT date, hour, impressions, clicks, revenue
    FROM public.hourly_stats
    ORDER BY date, hour
  `
  return next()
}, paginateQuery)

app.get('/stats/daily', (req, res, next) => {
  req.sqlTable = 'public.hourly_stats'
  req.sqlQuery = `
    SELECT date,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date
    ORDER BY date
  `
  return next()
}, paginateQuery)

app.get('/poi', (req, res, next) => {
  req.sqlQuery = `
    SELECT *
    FROM public.poi;
  `
  return next()
}, handleQuery)

app.listen(process.env.PORT || 5555, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(`Running on ${process.env.PORT || 5555}`)
  }
})

// last resorts
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`)
  process.exit(1)
})
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  process.exit(1)
})
