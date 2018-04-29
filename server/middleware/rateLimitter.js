import RateStore from '../helper/rateStore'
import { constants } from '../config'

const options = constants.rateLimit

const  handleLimitExceeded = (req, res, key) => {
  if (!options.store.delays[key]) {
    options.store.setDelay(key, options.delayMs)
  }
  res.format({
    html: () => {
      res.status(options.statusCode).end(options.message)
    },
    json: () => {
      res.status(options.statusCode).json({ message: options.message })
    }
  })
}

const rateLimit = (req, res, next) => {
  const key = req.ip

  options.store.incr(key, (current) => {
    req.rateLimit = {
      current,
      limit: options.max,
      remaining: Math.max(options.max - current, 0)
    }
    res.setHeader('X-RateLimit-Limit', options.max)
    res.setHeader('X-RateLimit-Remaining', req.rateLimit.remaining)
    if ((options.max && current > options.max) || options.store.delays[key]) {
      return handleLimitExceeded(req, res, key)
    }
    next()
  })
}

const rateLimitter = () => {
  options.store = options.store || new RateStore(options.resetTimeoutMs)
  return rateLimit
}

export default rateLimitter
