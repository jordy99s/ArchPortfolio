import React, {useState} from 'react'
import { Link } from 'react-router-dom'

/**
* @author Jordy V.
* @function Navigation bar of webpage
**/

function Navbar() {
  return(
    <>
        <nav className="navbar">
            <div className = "navbar-container">
                <Link to="/" className="navbar-logo"></Link>
            </div>

        </nav>
    </>
   )

 }

export default Navbar