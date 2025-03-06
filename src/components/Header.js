import React, { useState } from "react";
import logo1 from "../../public/logo1.png";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  // onst[(activeTab, setActiveTab)] = useState("/"); // State to track selected tab
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo1} alt="Logo" />
        <h1 className="site-name">My Food App</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            {/* {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.path}
                className={activeTab === item.path ? "active" : ""}
                onClick={() => setActiveTab(item.name)}
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))} */}
            <button
              className="login-button"
              onClick={
                () =>
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                // setBtnName("Logout")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
