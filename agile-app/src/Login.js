import './Login.css';
import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";


export const Login = ({ onAuth }) => {
    const [username, setUsername] = useState("")
    const [pword, setPword] = useState("")

    const onSubmit = () => {
        onAuth({
            email: username,
            password: pword
        })
    }
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Row><Image src="https://upload.wikimedia.org/wikipedia/commons/f/f0/NCR_logo_black.svg" ></Image></Row>
            <Row className='logo'>Atleos Agililty</Row>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form>
                <Row className="Row-Stuff">
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} type="text" />
                    </Form.Group>
                </Row>

                <Row className="Row-Stuff">
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPword(e.target.value)} value={pword} type="password" />
                    </Form.Group>
                </Row>

                <Row className="button Row-Stuff" >
                    <Button onClick={onSubmit} type='submit' style={{ justifyContent: 'center', alignItems: 'center'}}>Log in</Button>
                </Row>
            </Form>
            </Container>

        </Container>
    )
}