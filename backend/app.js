const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const bodyParser = require('body-parser')
const users = require('./users.json')
const stories = require ('./jira.json')


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

app.post('/getStory', (req, res) => {
    let foundStory = null;
    stories.forEach( story => {
        if (story.id === req.body.id) {
            foundStory = story;
        }
    })
    console.log(foundStory)
    res.send(foundStory);
})

app.post('/setStory', (req, res) => {
    let updatedStories = stories
    let storyFound = true;
    let indexOfStoryToUpdate = null
    stories.forEach(( story, i) => {
        if(story.id === req.body.id){
            storyFound = true;
            indexOfStoryToUpdate = i;
        }
    })

    if (storyFound) {
        updatedStories[indexOfStoryToUpdate].storyPoints = req.body.points
        return true;
    } else {
        return false;
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})