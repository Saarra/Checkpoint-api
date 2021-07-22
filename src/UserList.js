import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardGroup } from 'react-bootstrap';

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
  
        <CardGroup>
                {users.map((e, i) =>
                (
                      <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Name : {e.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Username : {e.username}</Card.Subtitle>
                            <Card.Text>
                                Adresse : {e.address.street} / {e.address.city}
                            </Card.Text>
                        </Card.Body>
                    </Card>            
                )
                )}
         </CardGroup>       

    );
}

export default Users;