import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
const sizes = require('./sizes.json')

export const Sizing = () => {
    const [experience, setExp] = useState("Yes")
    const [complexity, setComp] = useState("Low")
    const [effort, setEff] = useState("Low")
    const [devQA, setDevQA] = useState("Yes")
    const [sizeCalc, setSize] = useState("")
    const onSubmit = (e) => {
        e.preventDefault()
        sizes.forEach( size => {
            if (size.Experience === experience && size.Complexity === complexity && size.Effort === effort && size["Dev & QA"] === devQA) {
                setSize(size.Size)
            }
        })
    }
    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Select  onChange={(e) => setExp(e.target.value)} value={experience} type="text">
                    <option>Yes</option>
                    <option>No</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Complexity/Risk</Form.Label>
                <Form.Select  onChange={(e) => setComp(e.target.value)} value={complexity} type="text">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Effort</Form.Label>
                <Form.Select  onChange={(e) => setEff(e.target.value)} value={effort} type="text">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Dev & QA?</Form.Label>
                <Form.Select  onChange={(e) => setDevQA(e.target.value)} value={devQA} type="text">
                    <option>Yes</option>
                    <option>No</option>
                </Form.Select>
            </Form.Group>
        <Button onClick={onSubmit} type='submit'>get size</Button>
    </Form>
            SIZE: {sizeCalc}
        </>
    )
}