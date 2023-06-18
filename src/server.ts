import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, erroLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  erroLogger.error('Uncaught exception is detected', error);
  process.exit(1);
});

let server = new Server(app);
async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    erroLogger.error('failed to connect', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        erroLogger.error('server closed', error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
dbConnected();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
