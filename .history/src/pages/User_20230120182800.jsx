import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

export default function User() {
    const { getUser, user } = useContext(GithubContext)

    useEffect(() => {
        getUser(match.params.login)
    }, [])

    return (
        <div>
            {getUser()}
        </div>
    )
}
