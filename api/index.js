import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

const app = express();
const PORT = 5000

app.use(express.json())


/* Home Page */ 
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    })
})

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })

/*  ---------- Middlewares -------------  */ 

app.use('/api/user', userRouter)

app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})

