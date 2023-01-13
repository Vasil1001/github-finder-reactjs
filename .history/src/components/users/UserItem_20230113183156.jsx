import React from 'react'

export default function UserItem({ user }) {
  return <div>{user.login}</div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}