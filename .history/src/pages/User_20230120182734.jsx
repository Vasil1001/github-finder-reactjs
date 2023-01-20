import React, { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
impoer 
export default function User({match}) {
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
