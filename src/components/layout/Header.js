import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header-main'>
      <div>
        <Navbar bg='light' expand='lg' collapseOnSelect>
          <Container fluid>
            <Navbar.Brand href='/dashboard' className='fw-bold fs-6'>
              DASHBOARD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end'>
              <Nav>
                <Nav.Link href='/profile' className='fw-bold'>
                  <FaUserAlt className='fs-5 text-primary mx-2' />
                  PROFILE
                </Nav.Link>
                <Nav.Link href='/' className='fw-bold'>
                  <FaSignOutAlt className='fs-5 text-danger mx-2' />
                  LOGOUT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
