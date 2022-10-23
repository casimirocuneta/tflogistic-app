import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { FaFileAlt, FaTruck, FaRegFileAlt, FaDatabase } from 'react-icons/fa'

const DashboardHeader = () => {
  return (
    <div>
      <Row>
        <Col xl='3' className='mt-4'>
          <Card border='light' className='shadow-sm'>
            <Card.Body className='py-5'>
              <Row>
                <Col
                  xl='4'
                  className='text-end d-flex align-items-center justify-content-end'
                >
                  <FaFileAlt className='fs-1 text-primary' />
                </Col>
                <Col xl='8'>
                  <h5 className='mb-0 fs-3'>200</h5>
                  <p className='mb-0 text-secondary fs-6'>PURCHASE ORDER</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl='3' className='mt-4'>
          <Card border='light' className='shadow-sm'>
            <Card.Body className='py-5'>
              <Row>
                <Col
                  xl='4'
                  className='text-end d-flex align-items-center justify-content-end'
                >
                  <FaDatabase className='fs-1 text-danger' />
                </Col>
                <Col xl='8'>
                  <h5 className='mb-0 fs-3'>1000</h5>
                  <p className='mb-0 text-secondary fs-6'>PRODUCTS</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl='3' className='mt-4'>
          <Card border='light' className='shadow-sm'>
            <Card.Body className='py-5'>
              <Row>
                <Col
                  xl='4'
                  className='text-end d-flex align-items-center justify-content-end'
                >
                  <FaRegFileAlt className='fs-1 text-warning' />
                </Col>
                <Col xl='8'>
                  <h5 className='mb-0 fs-3'>500</h5>
                  <p className='mb-0 text-secondary fs-6'>ORDERS</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl='3' className='mt-4'>
          <Card border='light' className='shadow-sm'>
            <Card.Body className='py-5'>
              <Row>
                <Col
                  xl='4'
                  className='text-end d-flex align-items-center justify-content-end'
                >
                  <FaTruck className='fs-1 text-success' />
                </Col>
                <Col xl='8'>
                  <h5 className='mb-0 fs-3'>50</h5>
                  <p className='mb-0 text-secondary fs-6'>DELIVERIES</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DashboardHeader
