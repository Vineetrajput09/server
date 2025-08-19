const express = require('express')
const app = express()
const port =3000
const web  =require('./routes/web')
const connectDB = require('./db/connectDB')
const fileUpload = require('express-fileupload')
const cors = require("cors");
const cookieParser = require('cookie-parser')

require("dotenv").config()




app.use(
    cors({
      origin: "https://bookyourcourse.netlify.app", // Your frontend domain
      credentials: true, // allow credentials (cookies)
    })
  );


app.use(cookieParser())
//image uploadd
app.use(fileUpload({
    useTempFiles : true,
   
}));


//connectDB
connectDB()

app.use(express.json())







app.use('/api',web) //localhost:3000/api/
app.listen(process.env.PORT,console.log('server start localhost:8000'))
