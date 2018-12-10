import express from 'express'
import next from 'next'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { BraintreeRoutes } from './routes'

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 8000
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://PRODUCTION_URL'

const app = next({ dev })
const handle = app.getRequestHandler()

// Nextjs's server prepared
app.prepare()
  .then(() => {
    const server = express()
    const morganFormat = dev === 'production' ? 'combined' : 'dev'

    server.use(helmet())
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
