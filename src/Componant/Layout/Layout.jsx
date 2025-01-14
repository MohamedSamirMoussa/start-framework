import { Outlet } from 'react-router'

import Nav from '../Nav/Nav'
import Footer from './../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
