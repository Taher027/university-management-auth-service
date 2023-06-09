import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, erroLogger } from './shared/logger'

async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    erroLogger.error('failed to connect', error)
  }
}
dbConnected()
