import React, { useEffect, useState } from 'react'
import GithubContext from '../../context/github/GithubContext'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

export default function UserResults() {
  const {}
  useEffect(() => {
    fetchUsers()
  }, [])

  

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 
      xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
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
