import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar({ title }) {
    return <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2 text-white">
                <FaGithub className="inline pr-2 text-4xl" />
                <Link to="/" className='text-lg font-bold align-middle'>{title}</Link>
            </div>

            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    
                    <Link to="/" className="btn btn-ghost btn-sm rounded-lg">
                        Home
                    </Link>

                    <Link to="/about" className="btn btn-ghost btn-sm rounded-lg">
                        About
                    </Link>

                </div>
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