import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap'
import { FaEye, FaSearch } from 'react-icons/fa'

// Layout
import Main from '../layout/Main'
import DashboardHeader from '../reusable/DashboardHeader'

const DashboardScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <Main>
      <Container fluid className='mt-1 px-4'>
        <DashboardHeader />
        <Card border='light' className='mt-4 shadow-sm py-3'>
          <Card.Body>
            <Row>
              <Col xl='6'>
                <h5 className='m-0 pb-2'>On-going Deliveries</h5>
              </Col>
              <Col xl='6'>
                <Form className='pb-2'>
                  <Row className='justify-content-end'>
                    <Col xl='8'>
                      <InputGroup size='sm'>
                        <Form.Control
                          style={{
                            background: '#FFF',
                            border: '1px solid #ced4da',
                          }}
                          value={searchTerm}
                          placeholder='Input search keyword here . . .'
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm === '' ? (
                          <InputGroup.Text className='bg-info text-light'>
                            <FaSearch />
                          </InputGroup.Text>
                        ) : (
                          <Button
                            variant='danger'
                            onClick={() => setSearchTerm('')}
                          >
                            x
                          </Button>
                        )}
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>

            <Table responsive='xl'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DESTINATION</th>
                  <th>STATUS</th>
                  <th>DATE SCHEDULE</th>
                  <th>DATE DEPARTED</th>
                  <th>CREATED BY</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    1,
                    'Client 1',
                    'On-going',
                    'October 21st 2022, 11:01:18 am',
                    'October 22st 2022, 08:00:00 am',
                    'Employee 1',
                  ],
                  [
                    2,
                    'Client 2',
                    'On-going',
                    'October 21st 2022, 11:01:18 am',
                    'October 22st 2022, 08:00:00 am',
                    'Employee 1',
                  ],
                  [
                    3,
                    'Client 3',
                    'On-going',
                    'October 21st 2022, 11:01:18 am',
                    'October 22st 2022, 08:00:00 am',
                    'Employee 1',
                  ],
                  [
                    4,
                    'Client 4',
                    'On-going',
                    'October 21st 2022, 11:01:18 am',
                    'October 22st 2022, 08:00:00 am',
                    'Employee 1',
                  ],
                ].map((info) => (
                  <tr>
                    <td>{info[0]}</td>
                    <td>{info[1]}</td>
                    <td>{info[2]}</td>
                    <td>{info[3]}</td>
                    <td>{info[4]}</td>
                    <td>{info[5]}</td>
                    <td>
                      <Button size='sm' variant='success' className='px-3'>
                        <FaEye /> View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </Main>
  )
}

export default DashboardScreen
