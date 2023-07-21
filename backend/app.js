const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const users = require('./users.json')
const fs = require('fs')


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req)
})
app.post('/api/login', (req, res) => {
    let allowLogin = false
    let foundUser = null

    users.forEach( user => {
        if (user.Email === req.body.Email) {
            if (user.Password === req.body.Password) {
                allowLogin = true
                foundUser = user
            }
        }
    })
    console.log(foundUser)
    res.send(foundUser)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/retro/categories', (req, res) => {
    console.log("jncaca")
    fs.readFile('categories.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            console.log(obj)
            res.send(obj)
        }
    });

})

app.post('/retro/categories', (req, res) => {
    let newCat = req.body
    console.log(newCat)
    fs.readFile('categories.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            obj.push(newCat); //add some data
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('categories.json', json, 'utf8', () => res.sendStatus(200)); // write it back
            res.send(obj)
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})