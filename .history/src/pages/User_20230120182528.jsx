import React, { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

export default function User() {
    const { user } = useContext(GithubContext)

    return (
        <div>

        </div>
    )
}
