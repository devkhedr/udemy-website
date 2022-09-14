import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <header>
      <ul className="navbar">
        <li className="barsIcon">
          <button>
            <i className="fa fa-bars"></i>
          </button>
        </li>
        <li>
          <a href="index.html">
            <img alt="logo" className="navLogo" src={require('../../assets/logo/Udemy_logo.png')} />
          </a>
        </li>
        <li className="category">
          <button>Categories</button>
        </li>
        <li className="searchBox">
          <form>
            <button type="submit" className="searchIcon">
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              name="search"
              placeholder="Search for anything"
              className="searchText"
              autocomplete="off"
            />
          </form>
        </li>
        <li className="udemyBusiness">
          <button>Udemy Business</button>
        </li>
        <li className="teachUdemy">
          <button>Teach on Udemy</button>
        </li>
        <li className="cartSearchSmallWindow">
          <button className="searchIconSmallWindow">
            <i className="fa fa-search"></i>
          </button>
          <button className="cartIcon">
            <i className="fa fa-cart-shopping"></i>
          </button>
        </li>
        <li className="logIn">
          <a>
            <button>Log in</button>
          </a>
        </li>
        <li className="signUp">
          <a>
            <button>Sign up</button>
          </a>
        </li>
        <li className="languageIcon">
          <button>
            <i className="fa fa-globe"></i>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default NavBar