import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header_area">
    <div className="container">
      <div className="row">
        {/* Logo Area Start */}
        <div className="col-12">
          <div className="logo_area text-center">
            <a href="index.html" className="yummy-logo">Yummy Blog</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true" /> Menu</button>
            {/* Menu Area Start */}
            <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
              <ul className="navbar-nav" id="yummy-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-recipe" >Add Recipe</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header