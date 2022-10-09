const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
 const  routes = require('./routes/blogs');
 const databaseConnexion = require('./db/connect');
const PORT = 3003;

app.use(cors())
app.use(express.json())
app.use('/api',routes);





databaseConnexion.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })
}).catch((error) => {
    console.log(error)
})