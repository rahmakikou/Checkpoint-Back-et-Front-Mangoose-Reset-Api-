const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const contactRouter = require('./Routes/Contact')

const app = express()

const port = 5000


ConnectDB() 

app.use(express.json()) //unifier le langage 

app.use( '/api/contact', contactRouter)  //racine commune

app.listen(port, console.log(`the server is working on the port ${port}`))