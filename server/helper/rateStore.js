class RateStore {
  constructor (resetTimeoutMs) {
    const interval = setInterval(this.resetAll, resetTimeoutMs)
  }

  hits = {}
  delays = {}

  incr = (key, cb) => {
    if (this.hits[key]) {
      this.hits[key]++
    } else {
      this.hits[key] = 1
    }
    cb(this.hits[key])
  }

  setDelay = (key, resetDelay) => {
    this.delays[key] = true
    setTimeout(() => this.resetKey(key), resetDelay)
  }

  resetAll = () => {
    this.hits = {}
  }

  resetKey = key => {
    delete this.delays[key]
  }
}

export default RateStore
