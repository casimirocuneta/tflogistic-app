import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

const LoginScreen = () => {
  return (
    <div
      className='login-main d-flex justify-content-center align-items-center shadow-lg'
      style={{
        backgroundImage: 'url(./assets/background/gradientBackground.jpg)',
      }}
    >
      <Container>
        <Row className='bg-light rounded'>
          <Col xl='6' className='px-0 mx-0'>
            <img
              src='assets/background/loginImage.jpg'
              alt='/'
              className='d-none d-xl-block mx-0 rounded'
              style={{ height: '84vh' }}
            />
          </Col>
          <Col
            xl='6'
            className='px-5 pt-5 pb-3 text-center d-flex align-items-center justify-content-center'
          >
            <div className='px-5'>
              <FaUserCircle
                style={{
                  fontSize: '100px',
                  marginBottom: '30px',
                  color: '#4582ec',
                }}
              />
              <h3 style={{ color: '#2f9fb7' }}>Login to Your Account</h3>
              <p className='fs-6'>Login using credentials</p>
              <Form className='mt-5'>
                <Row>
                  <Col xl='4' className='d-flex align-items-center m-0'>
                    <Form.Label className='m-0'>
                      <h6 className='m-0'>Username</h6>
                    </Form.Label>
                  </Col>
                  <Form.Group as={Col} xl='8'>
                    <Form.Control type='text' />
                  </Form.Group>
                </Row>
                <Row className='mt-2'>
                  <Col xl='4' className='d-flex align-items-center m-0'>
                    <Form.Label className='m-0'>
                      <h6 className='m-0'>Password</h6>
                    </Form.Label>
                  </Col>
                  <Form.Group as={Col} xl='8'>
                    <Form.Control type='password' />
                  </Form.Group>
                </Row>
                <div className='text-end'>
                  <Link
                    style={{
                      fontSize: '11px',
                      textDecoration: 'underline',
                      color: '#2f9fb7',
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className='d-flex justify-content-end mt-4'>
                  <Button variant='primary' type='submit' className=' px-5'>
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginScreen
