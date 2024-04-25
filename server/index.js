import express from 'express';
import dotenv from 'dotenv';
import { mongodbConnection } from './db/index.js';
const app =  express()
import userRoute from './Routes/user.route.js'

dotenv.config({path: './.env'})
mongodbConnection().then(()=> {
    app.listen(5000, ()=>{
        console.log('Server is running on port 5000')
    })
}).catch((error)=> {
    console.log('Error in connecting to MongoDB', error)
    process.exit()})
app.use(express.json())
app.use('/api/v1/auth', userRoute)


