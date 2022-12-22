//import './config.js'
require ('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')


var cors = require('cors')



const app = express()
app.use(cors())


app.set('port',process.env.PORT_SERVER || 9000)

const dbOptions={
    host:process.env.DB_Host || 'localhost',
    port:rocess.env.DB_PORT || '3306',
    user:rocess.env.DB_USER || 'root',
    password:rocess.env.DB_PWD || 'marce123',
    database:rocess.env.DB_NAME || 'libreriac4'
}

app.use(myconn(mysql,dbOptions, 'single'))
app.use(express.json())




/// routes
app.get('/',(req,res)=>{
   res.send('Welcome to my APP')
})

app.use('/api' ,routes)
 
app.listen(app.get('port'),()=>{
    console.log(`El puerto corre en: ${app.get('port')}`)
})