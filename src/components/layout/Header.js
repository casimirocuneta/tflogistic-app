import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-main'>
      <div>
        <Navbar bg='light' expand='lg' collapseOnSelect>
          <Container fluid>
            <Navbar.Brand className='fw-bold fs-6'>
              <Link
                to='/dashboard'
                style={{ textDecoration: 'none', color: '#000' }}
              >
                DASHBOARD
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end'>
              <Nav>
                <Link
                  to='/profile'
                  style={{ textDecoration: 'none', color: '#adb5bd' }}
                  className='fw-bold'
                >
                  <FaUserAlt className='fs-5 text-primary mx-2' />
                  PROFILE
                </Link>
                <Link
                  to='/'
                  style={{ textDecoration: 'none', color: '#adb5bd' }}
                  className='fw-bold'
                >
                  <FaSignOutAlt className='fs-5 text-danger mx-2' />
                  LOGOUT
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
