import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Table,
  Modal,
} from 'react-bootstrap'
import { FaSearch, FaEye, FaInfoCircle } from 'react-icons/fa'

// Layout
import Main from '../layout/Main'

const ClientListScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [modal, setModal] = useState({
    createModal: false,
  })
  return (
    <Main>
      <Container fluid className='mt-1 mb-4 px-4'>
        <Card border='light' className='mt-4 shadow-sm py-3'>
          <Card.Body>
            <h6>Client List</h6>
            <hr className='text-secondary' />

            <Row className='pt-1 pb-3'>
              <Col xl='6' className='pt-1 pb-2'>
                <Button
                  type='button'
                  variant='info'
                  className='px-4 fw-bold'
                  onClick={() => {
                    setModal({
                      createModal: true,
                    })
                  }}
                >
                  ADD CLIENT
                </Button>
              </Col>
              <Col xl='6'>
                <Form className='pb-2'>
                  <Row className='justify-content-end'>
                    <Col xl='8'>
                      <InputGroup>
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

            <Table responsive>
              <thead>
                <tr>
                  <th>Client Code</th>
                  <th>Client Name</th>
                  <th>Brand Handling</th>
                  <th>Address</th>
                  <th>Contact No</th>
                  <th>Contact Person</th>
                  <th>Encoded By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'CL-0001',
                    'Client 1',
                    'HONDA, TOYOTA, HYUNDAI',
                    'Las Pinas, Metro Manila',
                    '091234567891',
                    'Contact Person 1',
                    'Employee 1',
                  ],
                  [
                    'CL-0002',
                    'Client 2',
                    'HONDA, TOYOTA, HYUNDAI',
                    'Las Pinas, Metro Manila',
                    '091234567891',
                    'Contact Person 2',
                    'Employee 2',
                  ],
                  [
                    'CL-0003',
                    'Client 3',
                    'HONDA, TOYOTA, HYUNDAI',
                    'Las Pinas, Metro Manila',
                    '091234567891',
                    'Contact Person 3',
                    'Employee 3',
                  ],
                  [
                    'CL-0004',
                    'Client 4',
                    'HONDA, TOYOTA, HYUNDAI',
                    'Las Pinas, Metro Manila',
                    '091234567891',
                    'Contact Person 4',
                    'Employee 4',
                  ],
                ].map((info) => (
                  <tr>
                    <td className='align-middle'>{info[0]}</td>
                    <td className='align-middle'>{info[1]}</td>
                    <td className='align-middle'>{info[2]}</td>
                    <td className='align-middle'>{info[3]}</td>
                    <td className='align-middle'>{info[4]}</td>
                    <td className='align-middle'>{info[5]}</td>
                    <td className='align-middle'>{info[6]}</td>
                    <td>
                      <Button variant='success' className='px-3'>
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

      <Modal
        size='lg'
        show={modal.createModal}
        onHide={() => setModal({ createModal: false })}
        centered
        backdrop='static'
      >
        <Modal.Header style={{ background: '#4582ec' }}>
          <Modal.Title style={{ color: '#FFF' }}>
            <FaInfoCircle className='mx-3' /> ADD CLIENT INFORMATION
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#edf1f5' }}>
          <Form>
            <Row className='py-1'>
              <Col xl='3' className='d-flex align-items-center'>
                <Form.Label className='mb-0 fw-bold'>Client Name</Form.Label>
              </Col>
              <Form.Group as={Col} xl='9'>
                <Form.Control type='text' />
              </Form.Group>
            </Row>
            <Row className='py-1'>
              <Col xl='3' className='d-flex align-items-center'>
                <Form.Label className='mb-0 fw-bold'>Brand Handling</Form.Label>
              </Col>
              <Form.Group as={Col} xl='9'>
                <Form.Control type='text' />
              </Form.Group>
            </Row>
            <Row className='py-1'>
              <Col xl='3' className='d-flex align-items-center'>
                <Form.Label className='mb-0 fw-bold'>Address</Form.Label>
              </Col>
              <Form.Group as={Col} xl='9'>
                <Form.Control as='textarea' />
              </Form.Group>
            </Row>
            <Row className='py-1'>
              <Col xl='3' className='d-flex align-items-center'>
                <Form.Label className='mb-0 fw-bold'>Contact No</Form.Label>
              </Col>
              <Form.Group as={Col} xl='9'>
                <Form.Control type='text' />
              </Form.Group>
            </Row>
            <Row className='py-1'>
              <Col xl='3' className='d-flex align-items-center'>
                <Form.Label className='mb-0 fw-bold'>Contact Person</Form.Label>
              </Col>
              <Form.Group as={Col} xl='9'>
                <Form.Control type='text' />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ background: '#edf1f5' }}>
          <Button variant='success' className='px-4 fw-bold' type='button'>
            Submit
          </Button>
          <Button
            className='px-4 fw-bold'
            type='button'
            variant='danger'
            onClick={() => setModal({ createModal: false })}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Main>
  )
}

export default ClientListScreen
