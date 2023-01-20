import React, { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

export default function User() {
    const { getUser, user } = useContext(GithubContext)
    
    return (
        <div>
            {getUser()}
        </div>
    )
}
