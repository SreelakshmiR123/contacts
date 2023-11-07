import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';


function SingleView() {
    const [AllData, setData] = useState([])

    const { id } = useParams()
    console.log(id);

    const fetchAllDatas = async () => {
        const result = await axios.get('/contacts.json')
        setData(result.data.contacts);
    }
    useEffect(() => {
        fetchAllDatas()
    }, [])

    const singleData = AllData.find(i => i.id == id)
    console.log(singleData);

    return (
        <div>
            {singleData &&
                <Row className='p-5'>
                    <Col className='p-5'>
                        <img style={{ height: '600px', width: '75%' }}
                            src={singleData.profile} alt="" />
                    </Col>
                    <Col className='me-5 pe-5'>
                        <h1 className='text-danger mt-5'>{singleData.name}</h1>
                        <ListGroup className='fs-3 mt-5 pt-5'>
                            <ListGroup.Item className='mt-3'>Email : <span className='text-danger'>{singleData.email} </span> </ListGroup.Item>
                            <ListGroup.Item className='mt-3'>Mobile : <span className='text-danger'>{singleData.mobile}</span></ListGroup.Item>
                            <ListGroup.Item className='mt-3'>Location : <span className='text-danger'>{singleData.location}</span></ListGroup.Item>


                        </ListGroup>
                    </Col>
                </Row>
            }

        </div>

    )
}

export default SingleView