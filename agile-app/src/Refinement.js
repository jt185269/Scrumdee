import { useState } from "react";
import './App.css';
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const Refinement = ({ users, user }) => {
    const [currentState, setState] = useState("basePage");
    const [buttonText, setButtonText] = useState("Start Voting");
    const [complexity, setComp] = useState("Low")


    function changeButtonText() {
        if (buttonText === "Start Voting") {
            setButtonText("Stop Voting")
        }
        else {
            setState("finishedVoting")
        }
    }

    function updateStory() {
        alert('Story Updated!');
        setState("basePage")
        setButtonText("Start Voting")
    }
    function submittedVote() {
        alert('Vote Submitted');
        setState('userVoted')
    }

    if (user.admin) {
        return (
            <div>
                <br />
                <h3>Refinement - Scrum Master</h3>
                <br />

                <p>Hi {user.DisplayName}</p>

                {currentState === 'basePage' && <div>
                    <Form.Group>
                        <Form.Label>Select Story</Form.Label>
                        <Form.Select onChange={(e) => setComp(e.target.value)} value={complexity} type="text" className="dropdown-custom">
                            <option>NDCX-7912</option>
                            <option>NDCX-5984</option>
                            <option>NDCX-1928</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="button-size" onClick={() => changeButtonText()}>{buttonText}</Button>
                </div>}
                {currentState === 'finishedVoting' && <div>
                    <Form.Group>
                        <Form.Label>Select Story</Form.Label>
                        <Form.Select onChange={(e) => setComp(e.target.value)} value={complexity} type="text" className="dropdown-custom">
                            <option>NDCX-7912</option>
                            <option>NDCX-5984</option>
                            <option>NDCX-1928</option>
                        </Form.Select>
                    </Form.Group>
                    <Button>Start Voting</Button>

                    <br />
                    <br />
                    <br />

                    <h3>Team Votes</h3>
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>James</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Dillon</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Maddie</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mathew</td>
                                <td>5</td>

                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Holly</td>
                                <td>5</td>

                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Gina</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Mode Vote</h3>
                    <h2>2</h2>
                    <Form.Group>
                        <Form.Label>Select Story Points</Form.Label>
                        <Form.Select onChange={(e) => setComp(e.target.value)} value={complexity} type="text" className="dropdown-custom">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>5</option>
                            <option>8</option>
                            <option>13</option>
                            <option>21</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="button-size" onClick={() => updateStory()}>Update Jira</Button>
                </div>}
            </div>
        )
    }
    else {
        return (
            <Container>
                <br />
                <h3>Refinement</h3>
                <br />
                <p>Hi {user.DisplayName}</p>
                <h3>Story Sizing for: NDCX-7912</h3>
                {currentState === 'basePage' && <Col>
                    <Row>
                        <Form.Group>
                            <Form.Label>Select Story Points</Form.Label>
                            <Form.Select onChange={(e) => setComp(e.target.value)} value={complexity} type="text" className="dropdown-custom">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>5</option>
                                <option>8</option>
                                <option>13</option>
                                <option>21</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <br />
                        <Button className="generate-button" onClick={() => submittedVote()}>Cast Vote</Button>
                    <br />
                </Col>
                }
                {currentState === 'userVoted' && <Col> <Row>
                    <Form.Group>
                        <Form.Label>Select Story Points</Form.Label>
                        <Form.Select onChange={(e) => setComp(e.target.value)} value={complexity} type="text" className="dropdown-custom">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>5</option>
                            <option>8</option>
                            <option>13</option>
                            <option>21</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                    <br />
                        <Button className="generate-button" onClick={() => submittedVote()}>Cast Vote</Button>
                    <br />
                    <br />
                    <br />

                    <h3>Team Votes</h3>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>James</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Dillon</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Maddie</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mathew</td>
                                <td>5</td>

                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Holly</td>
                                <td>5</td>

                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Gina</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                }
            </Container >
        )
    }
}