import React from "react";

function Header() {
  return (
    <header>
      <div className="conatiner">
        <div className="website-header">
          <div className="website-logo">
            <a href="*">React Ecommerce</a>
          </div>
          <div className="header-navigation">
            <nav>
              <ul>
                <li>
                  <a href="*" className="header-black-a">
                    Home
                  </a>
                </li>
                <li>
                  <a href="*">Products</a>
                </li>
                <li>
                  <a href="*">About</a>
                </li>
                <li>
                  <a href="*">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-buttons">
            <buttton className="header-button">Login</buttton>
            <buttton className="header-button">Register</buttton>
            <buttton className="header-button">Cart (0)</buttton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
