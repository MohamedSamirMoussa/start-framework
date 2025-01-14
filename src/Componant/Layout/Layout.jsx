import { Outlet } from 'react-router'

import Nav from '../Nav/Nav'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />

    </>
  )
}

export default Layout
