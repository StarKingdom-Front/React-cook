import React from 'react'

import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className='blue darken-1'>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">React project</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/about'>Contact</Link></li>
                    <li><Link to='/contact'>About</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
