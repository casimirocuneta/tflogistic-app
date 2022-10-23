import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {} from 'react-router-dom'
import { FaCubes } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

const PageNotFounScreen = ({ history }) => {
  return (
    <div
      className='login-main d-flex justify-content-center align-items-center shadow-lg'
      style={{
        backgroundImage: 'url(./assets/background/gradientBackground.jpg)',
      }}
    >
      <Container>
        <Row className='bg-light rounded'>
          <Col
            xl='6'
            className='px-0 d-none d-xl-block mx-0 rounded'
            style={{
              backgroundImage: 'url(./assets/background/pagenotfound.jpg)',
              height: '84vh',
              backgroundPosition: 'top center',
            }}
          ></Col>
          <Col
            xl='6'
            className='px-5 pt-5 pb-3 text-center d-flex align-items-center justify-content-center'
          >
            <div className='px-5'>
              <FaCubes
                style={{
                  fontSize: '150px',
                  marginBottom: '30px',
                  color: '#adbcd4',
                }}
                className='m-0'
              />
              <h1 style={{ color: '#d9534f', fontSize: '130px' }}>Whoops!</h1>
              <h5>404 PAGE NOT FOUND</h5>
              <p className='fs-6'>We were sorry for the inconvinience</p>
              <Button className='px-5 mt-3' onClick={() => history.goBack()}>
                Return
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(PageNotFounScreen)
