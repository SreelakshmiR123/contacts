import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RestCard from '../Components/RestCard'
import { Container, Row, Col } from 'react-bootstrap'



function Home() {

    const [contacts,setContacts]=useState([])

    const fetchData = async () => {
        const result = await axios.get('/contacts.json')
        setContacts(result.data.contacts);
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(contacts);

    return (
        <Container>
      <Row>

        <div>
          <Row className='mt-5 p-5'>
            <Col>
              <h2 className='mt-3 mb-5 text-danger'>Find The Best Contacts</h2>
              <p className='fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam fuga ipsam numquam blanditiis! Velit minus mollitia temporibus quae vel ducimus amet, necessitatibus repellat rem iure sit quasi fugit itaque?
              </p>
            </Col>
            <Col>
              <img className='image-width' src="https://i.postimg.cc/Kj0NM3PX/contact3.jpg" alt="" />
            </Col>
          </Row>

          <Row className='ms-5'>

            {
              contacts.map(i => (
                <Col className='ps-3 mt-3 p-2' lg={3} md={4} sm={6} key={i.id}>
                  <RestCard item={i}></RestCard>
                </Col>

              ))
              
            }

          </Row>

        </div>
      </Row>
    </Container>
    )
}

export default Home