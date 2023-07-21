import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import * as fs from 'fs';

export const Refinement = ({users, user}) => {
    const [story, setStory] = useState({id:"", storyPoints:0});
    const [votes, setVotes] = useState([{email: "", vote:0}]);
    const [mode, setMode] = useState([]);
    let votingStarted = false;
    let tempVotingArray = []

    function calculateMode(pointVotes){
        var frequency = []; // array of frequency.
        var maxFreq = 0; // holds the max frequency.
        var modes = [];

        for (var i in pointVotes) {
            frequency[pointVotes[i]] = (frequency[pointVotes[i]] || 0) + 1; // increment frequency.

            if (frequency[pointVotes[i]] > maxFreq) { // is this frequency > max so far ?
                maxFreq = frequency[pointVotes[i]]; // update max.
            }
        }

        for (var k in frequency) {
            if (frequency[k] == maxFreq) {
                modes.push(k);
            }
        }

        return modes;
    }

    function handleStartVoting() {
        votingStarted = true;
        users.forEach( user => {
            if (user.admin === true) {
                tempVotingArray.push({name: user.Email, pointsVote: 0});
            }
        })
        let tempJSON = JSON.stringify(tempVotingArray);
       // fs.writeFileSync("tempVoting.json", tempJSON);
    }
     function handleStopVoting() {
       // tempVotingArray = require('./tempVoting');
        let pointVotes = [];
        votes.forEach( userVote => {
            pointVotes.push(userVote.vote);
        });
        let modes = calculateMode(pointVotes);
        setVotes(tempVotingArray);
        setMode(modes);
    }

    function handleGetStory(storyId){
        let options= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: storyId })
        }
        console.log(user);
        const res = fetch('http://localhost:5000/api/getStory', options)
        console.log(res.json())
        console.log(JSON.stringify(res.json()))
        setStory(res.json())
        return res.json();
    }

    function handleUpdateStory(story){
        let options= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: story.id, points: story.storyPoints })
        }
        const res = fetch('http://localhost:5000/api/setStory', options)
    }

    if (user.admin) {
        return (
            <div>
                <div>
                    <h3>Refinement</h3>
                    <p>hi, {user.Email}</p>
                    <p>you are an admin</p>
                </div>
                <div>
                    <Form onSubmit={handleGetStory}>
                        <Form.Label htmlFor="selectStory">Select Story</Form.Label>
                        <Form.Control
                            id="selectStory"
                            type="text"
                            value={story.id}
                            aria-describedby="selectStoryHelpBlock"
                        />
                        <Form.Text id="selectStoryHelpBlock" muted>
                            Input a Jira Story Number, i.e. NDCX-7012
                        </Form.Text>
                        <Button type="submit">Get Story</Button>
                    </Form>
                </div>
                {story.id !== "" && <div>
                    <ButtonGroup aria-label="StartStop">
                        <Button disabled ={(votingStarted)} onClick={handleStartVoting()}>Start</Button>
                        <Button disabled ={(!votingStarted)} onClick={handleStopVoting()}>Stop</Button>
                    </ButtonGroup>

                </div>}
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>Refinement</h3>
                <p>hi, {user.Email}</p>
                <p>you are not an admin</p>
            </div>
        )
    }
}