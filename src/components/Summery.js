import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';


const Summery = () => {
    const location=useLocation();
    const [formData, setFormData]=useState({})

    useEffect(()=>{
        setFormData(location.state)
    },[])
    return (
        <div>
            {console.log(formData?.image?.original)}

            <Card>
                <Card.Img variant="top" style={{height:"500px"}} src={formData?.image?.original} />
                <Card.Body>
                    <Card.Text>
                        {console.log(formData.summary)}
                    {formData?.summary && parse(formData?.summary)}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Summery
