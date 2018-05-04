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
  chart: {
    ERROR_MESSAGE,
    options: {
      yAxis: {
        title: {
          text: '',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      plotOptions: {
        series: {
          label: {
             connectorAllowed: false,
          },
        },
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        }],
      },
    },
  },
  map: {
    tables: ['events', 'stats', 'default'],
    metrics: {
      events: ['hour', 'events'],
      stats: ['hour', 'impressions', 'clicks', 'revenue'],
      default: [],
    },
    pgTable: {
      events: 'hourly_events',
      stats: 'hourly_stats',
    },
    endpoint: '/poi',
    options: {
      googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
      ERROR_MESSAGE: 'Please check your network connection',
    },
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
} as any
