const ERROR_MESSAGE = `This endpoint might have request rate limitations or You are not connected to the internet,
                       Refresh the page after a while and make few requests at a time or check your connection`

export default {
  api: {
    BASE_URL: 'http://localhost:5555',
  },
  pagination: {
    LIMIT: 16,
    ERROR_MESSAGE,
  },
  application: {
    endpoints: [
      {
        title: 'Events Daily',
        endpoint: '/events/daily',
      },
      {
        title: 'Events Hourly',
        endpoint: '/events/hourly',
      },
      {
        title: 'Stats Daily',
        endpoint: '/stats/daily',
      },
      {
        title: 'Stats Hourly',
        endpoint: '/stats/hourly',
      },
    ],
  },
}
