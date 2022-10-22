import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Main = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className='d-flex'>
        <Container fluid>
          <Row id='main-content'>
            <Col xl='12' className='p-0'>
              <header>
                <Header />
              </header>
            </Col>
            <Col xl='12' className='p-0' style={{ background: '#edf1f5' }}>
              <main>{children}</main>
            </Col>
            <Col xl='12' className='p-0'>
              <footer>
                <Footer />
              </footer>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Main
