const express = require('express')
const next = require('next')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { BraintreeRoutes } = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 8000
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL

const app = next({ dev })
const handle = app.getRequestHandler()

// Nextjs's server prepared
app.prepare()
  .then(() => {
    const server = express()
    const morganFormat = dev === 'production' ? 'combined' : 'dev'

    server.use(helmet())
    server.use(express.json());
    server.use(morgan(morganFormat))
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    // Add routes after setting up middleware
    server.use('/api', [BraintreeRoutes])

    server.get('*', (req, res) => handle(req, res))

    // starting express server
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on ${ROOT_URL}`)
    })
  })
