import React from 'react'
import "../navbar/navbar.css"

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="left">
                Smart Parking
            </div>
            <div className="right">
                <ol>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Navbar