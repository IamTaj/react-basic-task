import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-primary bg-primary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Falcon</a>
    <button className="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Falcon</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Orders
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Your Orders</a></li>
              <li><a className="dropdown-item" href="/">Save & Subscribe</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Login & Security</a></li>
              <li><a className="dropdown-item" href="/">Your Addresses</a></li>
              <li><a className="dropdown-item" href="/">Manage Your Profiles</a></li>
              <li><a className="dropdown-item" href="/">Review your Purchases</a></li>
              <li><a className="dropdown-item" href="/">Memberships & Subscriptions</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Personalization
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Wish List</a></li>
              <li><a className="dropdown-item" href="/">Profile</a></li>
              <li><a className="dropdown-item" href="/">Your Recommendations</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Data & Privacy
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Request Your Information</a></li>
              <li><a className="dropdown-item" href="/">Close Your Falcon Account</a></li>
              <li><a className="dropdown-item" href="/">Privacy Notice</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
