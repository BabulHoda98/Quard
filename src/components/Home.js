import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home() {

    const [formData, setFormData] = useState([])

    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
            setFormData(res.data)
        }).catch(err => {
            console.log(err.meaasge)
        })
    },[])

    return (
        <div className='row'>
            {formData.map((obj,id) => 
            <div className='col-md-3 col-sm-12' key={id} style={{paddingTop:"20px"}}>
                
                {console.log(obj?.show)}

                <Card style={{ width: '18rem' }} >
                    <Card.Img style={{height:"150px"}} variant="top" src={obj?.show?.image?.medium} />
                    <Card.Body>
                        <Card.Title>{obj?.show?.name}</Card.Title>
                        <Card.Text>
            
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <NavLink to="/card" state={obj.show}><Button variant="outline-primary" size='sm'>Card Link</Button>{' '}</NavLink>
                    </Card.Body>
                </Card>
            </div>
            )}


        </div>
    )
}
