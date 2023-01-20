import React, { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

export default function User() {
    const { getUser, user } = useContext(GithubContext)

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [])
    
    return (
        <div>
            {getUser()}
        </div>
    )
}
