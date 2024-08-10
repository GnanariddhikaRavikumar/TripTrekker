import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { findpackage } from "../Redux/PackageSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handlePackageClick = (packageName) => () => {
    dispatch(findpackage(packageName));
  };

  return (
    <>
      <nav>
        <img className="logo" src="src/assets/logo.jpg" alt="logo" />
        <img className="name" src="src/assets/triptrekker.jpg" alt="name" />
        <div className="header">
          <div className="dropdown">
            <h5 className="dropdown-btn">INDIA PACKAGES</h5>
            <div className="dropdown-content">
              <Link to="/place-details" onClick={handlePackageClick("Kerala")}>Kerala</Link>
              <Link to="/place-details" onClick={handlePackageClick("Goa")}>Goa</Link>
              <Link to="/place-details" onClick={handlePackageClick("Delhi-Agra")}>Delhi-Agra</Link>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="dropdown">
            <h5 className="dropdown-btn">INTERNATIONAL PACKAGES</h5>
            <div className="dropdown-content">
              <Link to="/place-details" onClick={handlePackageClick("London")}>London</Link>
              <Link to="/place-details" onClick={handlePackageClick("Bali")}>Bali</Link>
              <Link to="/place-details" onClick={handlePackageClick("Dubai")}>Dubai</Link>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="dropdown">
            <h5 className="dropdown-btn">CRUISE PACKAGES</h5>
            <div className="dropdown-content">
              <Link to="/place-details" onClick={handlePackageClick("Package 1")}>Package 1</Link>
              <Link to="/place-details" onClick={handlePackageClick("Package 2")}>Package 2</Link>
              <Link to="/place-details" onClick={handlePackageClick("Package 3")}>Package 3</Link>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="dropdown">
            <h5 className="dropdown-btn">SUMMER VACATION</h5>
            <div className="dropdown-content">
              <Link to="/place-details" onClick={handlePackageClick("Andaman Island")}>Andaman Island</Link>
              <Link to="/place-details" onClick={handlePackageClick("Coorg")}>Coorg</Link>
              <Link to="/place-details" onClick={handlePackageClick("Darjeeling")}>Darjeeling</Link>
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
