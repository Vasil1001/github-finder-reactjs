import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar() {
  return <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
    <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
            <FaGithub className="inline pr-2 text-4xl"/>
            <Link to="/" className='text-lg font-bold align-middle'></Link>
        </div>
    </div>
  </nav>
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}