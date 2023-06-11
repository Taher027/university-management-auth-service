import express, { Application } from 'express'
import cors from 'cors'
// import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// middle ware
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// application router

app.use('/api/v1/users', UserRoutes)

// App test
// app.get('/', (req: Request, res: Response) => {
//   res.send('Working Successfully!')
// })

// error test
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('failed test')
//   // next('test error data')
// })

// Global error handler

app.use(globalErrorHandler)

// app.use(globalErrorHandler)

export default app
