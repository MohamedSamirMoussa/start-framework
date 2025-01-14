import { useState } from "react";
import { Link, NavLink } from "react-router";

const Nav = () => {
  const [nav, setNav] = useState(false);

  let changePadding = () => {
    if(window.scrollY >= 50){
      setNav(true)
    }else {
      setNav(false)
    }
    
  };
  window.addEventListener("scroll", changePadding);

  return (
    <>
      <nav className={nav ? 'navbar navbar-expand-lg fixed-top py-0 nav' :'navbar navbar-expand-lg fixed-top py-3 nav'} id="nav">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-uppercase text-white fw-bold fs-1"
            to={"home"}
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fw-bold">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white p-2 rounded-3"
                  aria-current="page"
                  to={"about"}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white p-2 rounded-3"
                  to={"portfolio"}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white p-2 rounded-3"
                  to={"contact"}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;