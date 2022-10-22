import React from 'react'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'

// Icons

import { FaUserAlt, FaHome, FaSignOutAlt } from 'react-icons/fa'

const Sidebar = ({ fontSize, fontWeight }) => {
  return (
    <div id='sidebar'>
      <ProSidebar image='assets/background/loginImage.jpg'>
        <SidebarHeader className='pt-3 text-center'>
          <div>
            <h4 className='text-white'>TF Logistics Philippines, Inc.</h4>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape='circle' className='mt-2 p-2'>
            <MenuItem
              className='my-4'
              icon={
                <FaHome style={{ fontSize, fontWeight }} className='mx-2' />
              }
            >
              <NavLink to='/dashboard' className='fw-bold fs-6'>
                DASHBOARD
              </NavLink>
            </MenuItem>

            <SubMenu
              title='TRANSACTION'
              className='my-3 fs-6 fw-bold'
              icon={
                <FaHome style={{ fontSize, fontWeight }} className='mx-2' />
              }
            >
              <MenuItem
                className='fw-bold fs-6'
                onClick={() =>
                  alert(
                    'You must verify your account first at the Profile page'
                  )
                }
              >
                APPLY
              </MenuItem>

              <MenuItem>
                <NavLink
                  className='fw-bold fs-6'
                  to='/user-application-status-list'
                  activeStyle={{
                    fontWeight: '700',
                    color: '#FFF',
                  }}
                >
                  STATUS
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to='/user-application-history-list'
                  activeStyle={{
                    fontWeight: '700',
                    color: '#FFF',
                  }}
                  className='fw-bold fs-6'
                >
                  HISTORY
                </NavLink>
              </MenuItem>
            </SubMenu>

            <MenuItem className='my-4' icon={<FaUserAlt className='mx-2' />}>
              <NavLink
                to='/profile'
                activeStyle={{
                  fontWeight: '700',
                  color: '#FFF',
                }}
                className='fw-bold fs-6'
              >
                PROFILE
              </NavLink>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <Menu>
            <MenuItem icon={<FaSignOutAlt className='fs-5 text-danger ' />}>
              <NavLink
                to='/profile'
                activeStyle={{
                  fontWeight: '700',
                  color: '#FFF',
                }}
                className='fw-bold fs-6'
              >
                LOGOUT
              </NavLink>
            </MenuItem>
          </Menu>
          {/* <div
            className='sidebar-btn-wrapper text-white'
            style={{
              padding: '20px 24px',
            }}
          >
            &#169; Powered by FiveTwenty IT Services
          </div> */}
        </SidebarFooter>
      </ProSidebar>
    </div>
  )
}

Sidebar.defaultProps = {
  fontSize: '30px',
  fontWeight: 'bold',
}

export default Sidebar
