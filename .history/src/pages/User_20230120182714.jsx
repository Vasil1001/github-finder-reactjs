import React, { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

export default function User({match}) {
    const { getUser, user } = useContext(GithubContext)

    useEffect(() => {
        getUser(match)
    }, [])

    return (
        <div>
            {getUser()}
        </div>
    )
}
