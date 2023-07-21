import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {Sizing} from './Sizing'
import {Refinement} from "./Refinement";
import {Retro} from "./Retro";

async function getUsers() {

    let options= {

        method: 'GET',

        headers: { 'Content-Type': 'application/json' },

    }

    const res = await fetch('http://localhost:5000/users', options)

    return res.json();

}

export const NavMenu = ({user}) => {
    const [page, setPage] = useState(null);
    const [users, setUsers] = useState(null)
    if (users === null) {
        getUsers().then( (res) => {
                setUsers(res)
            }
        );
    }


    const onPageChange = (e) => {
        setPage(e)
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => onPageChange("Sprint Planning")}>Sprint Planning</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Standup")}>Standup</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Refinement")}>Refinement</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Review")}>Review</Nav.Link>
                            <Nav.Link onClick={() => onPageChange("Retro")}>Retro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {(page === "Refinement") && <Sizing users={users} user={user}/>}
            {(page === "Retro") && <Retro users={users} user={user}/>}
            {/*{(page === "income" && data !== null) && <Income data={data} />}*/}
            {/*{(page === "summary" && data !== null) && <Summary data={data} />}*/}
            {/*{page === "schedule" && <CoffeeCalendar />}*/}
        </>

    );
}