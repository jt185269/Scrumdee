import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { useState } from 'react';
import { Sizing } from './Sizing'
import { Refinement } from "./Refinement";
import { Standup } from "./Standup";
import { Retro } from "./Retro";

async function getUsers() {

    let options = {

        method: 'GET',

        headers: { 'Content-Type': 'application/json' },

    }

    const res = await fetch('http://localhost:5000/users', options)

    return res.json();

}

export const NavMenu = ({ user }) => {
    const [page, setPage] = useState(null);
    const [users, setUsers] = useState(null)
    if (users === null) {
        getUsers().then((res) => {
            setUsers(res)
        }
        );
    }


    const onPageChange = (e) => {
        setPage(e)
    }

    return (
        <>
            <Container style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '10vh' }}>
                <Row><Image src="https://upload.wikimedia.org/wikipedia/commons/f/f0/NCR_logo_black.svg" ></Image></Row>
                <Row className='logo'>Atleos Agililty</Row>
            </Container>
            
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => onPageChange("Sizing")}>Sizing</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Standup")}>Standup</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Refinement")}>Refinement</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Review")}>Review</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Retro")}>Retro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {(page === "Sizing") && <Sizing users={users} user={user} />}
            {(page === "Refinement") && <Refinement users={users} user={user} />}
            {(page === "Standup") && <Standup users={users} user={user} />}
            {(page === "Retro") && <Retro users={users} user={user} />}
        </>

    );
}