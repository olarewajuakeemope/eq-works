export default {
  rateLimit: {
    resetTimeoutMs: 60 * 1000,
    delayMs: 5 * 60 * 1000,
    max: 5,
    statusCode: 429,
    message: 'Too many requests, please try again later.',
  },
}
