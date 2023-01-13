import React from 'react'
import PropTypes from 'prop-types'

export default function UserItem({ user: { login, avatar_url } }) {
  return <div className="user">{login}</div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}