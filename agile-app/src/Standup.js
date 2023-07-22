import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";

export const Standup = ({ users, user }) => {

    var min = 0;
    var usersCount = Object.keys(users).length;
    var rand = Math.floor(Math.random() * (usersCount));

    var num = -1;
    var ids = [];
    var names = [];

    /* initial */
    users.map(el => {
        ids.push(el.id);
        names.push(el.DisplayName);
    })

    function getRandom() {
        var rand = Math.floor(Math.random() * (usersCount));
        return rand;
    }

    function remove() {
        alert('will remove user');
        ids.splice(rand, 1);
        names.splice(rand, 1);
        /* how to redraw with these new arrays instead */
    }

    function select() {
        rand = getRandom();
        alert(names[rand]);
    }

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
            <Col>
                <br />
                <h3>Standup</h3>
                <br />
                <ul>
                    {
                        users.map(el => {
                            num++;
                            return (<li>{el.DisplayName}</li>);
                        })
                    }
                </ul>


                <Button onClick={select}>Select team member</Button>
                <p></p>
                <Button onClick={remove}>Remove selected</Button>

            </Col>
        </Container>
    )
}