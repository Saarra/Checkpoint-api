import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardGroup } from 'react-bootstrap';
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container ">
            <Card>
            {users.map((e, i) => (
            <Card border="primary" ><Card.Body>
                <Card.Title>Name : {e.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Username : {e.username}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Email : {e.email}</Card.Subtitle>
                <Card.Text><Card.Subtitle>Adresse </Card.Subtitle>  street : {e.address.street} / city : {e.address.city}</Card.Text>
                </Card.Body>
            </Card>))}
        </Card>
        </div>
    );
}

export default Users;