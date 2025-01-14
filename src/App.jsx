import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Componant/Home/Home";
import About from "./Componant/About/About";
import Contact from "./Componant/Contact/Contact";
import Portfolio from "./Componant/Portfolio/Portfolio";
import Footer from "./Componant/Footer/Footer";
import Layout from "./Componant/Layout/Layout";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "start-framework", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "/start-framework/about", element: <About /> },
        { path: "/start-framework/contact", element: <Contact /> },
        { path: "/start-framework/portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
