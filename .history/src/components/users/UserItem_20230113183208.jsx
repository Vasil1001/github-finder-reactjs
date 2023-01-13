import React from 'react'
import PropTypes from 'propTypes'
export default function UserItem({ user }) {
  return <div>{user.login}</div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}