import React, { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

export default function UserResults() {
  const { users, loading } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className="grid grid-cols-2 gap-8 
      xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 text-clip overflow-hidden">
        {users.map((user, index) => (
          <UserItem
            key={user.id}
            user={user}
          />
        ))}

      </div>
    )
  } else {
    return <Spinner />
  }

}
