import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }))
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`[HRx API] http://localhost:${PORT}`)
})
