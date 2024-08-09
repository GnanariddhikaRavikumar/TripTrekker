import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <img className="logo" src="src/assets/logo.jpg" alt="logo" />
        <img className="name" src="src/assets/triptrekker.jpg" alt="name" />
        <div className="header">
          <div className="dropdown">
            <h5 className="dropdown-btn">INDIA PACKAGES</h5>
            <div className="dropdown-content">
              <a href="#">Kerala</a>
              <a href="#">Goa</a>
              <a href="#">Delhi-Agra</a>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="dropdown">
            <h5 className="dropdown-btn">INTERNATIONAL PACKAGES</h5>
            <div className="dropdown-content">
              <a href="#">London</a>
              <a href="#">Bali</a>
              <a href="#">Dubai</a>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="dropdown">
            <h5 className="dropdown-btn">CRUISE PACKAGES</h5>
            <div className="dropdown-content">
              <a href="#">Package 1</a>
              <a href="#">Package 2</a>
              <a href="#">Package 3</a>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="dropdown">
            <h5 className="dropdown-btn">SUMMER VACATION</h5>
            <div className="dropdown-content">
              <a href="#">Andaman Island</a>
              <a href="#">Coorg </a>
              <a href="#">Darjeeling</a>
              <button>VIEW MORE</button>
            </div>
          </div>
        </div>
        <Link to="/login-user"><button>LOGIN</button></Link>
      </nav>
    </>
  );
};

export default Header;
