import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router";
import Home from "./Componant/Home/Home";
import About from "./Componant/About/About";
import Contact from "./Componant/Contact/Contact";
import Portfolio from "./Componant/Portfolio/Portfolio";
import Layout from "./Componant/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "start-framework", element: <Home /> },
        { path: "/start-framework/about", element: <About /> },
        { path: "/start-framework/contact", element: <Contact /> },
        { path: "/start-framework/portfolio", element: <Portfolio /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />  
    </>
  );
};

export default App;
