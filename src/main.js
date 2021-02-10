const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./controllers/authController')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/auth', router)



app.listen(3003, () => {
    console.log('server run in 3003')
})