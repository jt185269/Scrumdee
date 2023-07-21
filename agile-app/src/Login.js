import './Login.css';
import { useState } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Login = ({onAuth}) => {
    const [username, setUsername] = useState("")
    const [pword, setPword] = useState("")

    const onSubmit = () => {
        onAuth({
            email: username,
            password: pword
        })
    }
    return (
        <Container className="login-Form">   
        <Form>
            <Row className="Row-Stuff">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control  onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
                </Form.Group>
            </Row>
            
            <Row className="Row-Stuff">
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPword(e.target.value)} value={pword} type="password"/>
                </Form.Group>
            </Row>
                <Row className="button">
                <Button onClick={onSubmit} type='submit'>Log in!</Button>
                </Row>
            </Form>

        </Container>
    )
}