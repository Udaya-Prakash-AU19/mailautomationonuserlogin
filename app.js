const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT || 3400
const { router } = require('./routes/userRoutes')
const mongoose = require('mongoose')

// MongoDB and mongoose configuration
mongoose.connect(process.env.MONGO_URI,
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// creation of database connection
const db = mongoose.connection
db.on('error', ()=>console.log("Error in Connection"))
db.once('open', ()=>console.log("Connection Successful"))


// middlewares for bodyParsing and routing
app.use(express.json())
app.use('/', router)


app.listen(PORT, ()=>console.log("Server started at " + PORT))
