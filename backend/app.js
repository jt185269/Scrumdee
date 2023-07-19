const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const users = require('./users.json')


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req)
})
app.post('/api/login', (req, res) => {
    console.log(users)
    let allowLogin = false
    users.forEach( user => {
        if (user.Email === req.body.Email) {
            if (user.Password === req.body.Password) {
                allowLogin = true
            }
        }
    })
    res.send({auth: allowLogin})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})