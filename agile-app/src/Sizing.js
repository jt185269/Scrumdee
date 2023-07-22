import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
const sizes = require('./sizes.json')

export const Sizing = () => {
    const [experience, setExp] = useState("No")
    const [complexity, setComp] = useState("Low")
    const [effort, setEff] = useState("Low")
    const [devQA, setDevQA] = useState("No")
    const [sizeCalc, setSize] = useState("")
    const onSubmit = (e) => {
        e.preventDefault()
        sizes.forEach(size => {
            if (size.Experience === experience && size.Complexity === complexity && size.Effort === effort && size["Dev & QA"] === devQA) {
                setSize(size.Size)
            }
        })
    }

    const onRadioChange = e => {
        // e.preventDefault();
        e.persist();
        setExp(e.target.checked);
        alert("e.target.checked: " + e.target.checked + " e.target.value " + e.target.value + " experience:" + experience);

    }

    return (
        <Container>
            <br />
            <h3>Story Sizing</h3>

            <Row>
                <Col>
                    <Form className="sizing">
                        <Form.Group>
                            <Form.Label>Experience</Form.Label>
                            <Form.Select onChange={(e) => setExp(e.target.value)} value={experience} type="text">
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Complexity/Risk</Form.Label>
                            <Form.Select onChange={(e) => setComp(e.target.value)} value={complexity} type="text">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Effort</Form.Label>
                            <Form.Select onChange={(e) => setEff(e.target.value)} value={effort} type="text">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Dev & QA?</Form.Label>
                            <Form.Select onChange={(e) => setDevQA(e.target.value)} value={devQA} type="text">
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <Button className="generate-button" onClick={onSubmit} type='submit'>Generate size</Button>

                    </Form>
                </Col>
                <Col className="sizing-result">
                    Size:
                    <p>{sizeCalc}</p>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}