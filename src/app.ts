import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

// middle ware
app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// application router

app.use('/api/v1/', routes);

// App test
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully!');
});

// error test
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing error logger')
// })

// Global error handler

app.use(globalErrorHandler);

// app.use(globalErrorHandler)

export default app;
