import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Componant/Home/Home"
import About from './Componant/About/About';
import Contact from "./Componant/Contact/Contact";
import Portfolio from "./Componant/Portfolio/Portfolio";
import Footer from "./Componant/Footer/Footer";

const App = () => {

let router = createBrowserRouter([
    {path: "" , element:<Home />},
    {path: "start-framework" , element:<Home />, children : [
      {path: "home" , element:<Home />},
      {path: "about" , element: <About />},
      {path: "contact" , element: <Contact />},
      {path: "portfolio" , element: <Portfolio />},
    ]},
])
  return (
    <>
    <RouterProvider router={router} />
    <Footer />
    </>
  )
}

export default App
