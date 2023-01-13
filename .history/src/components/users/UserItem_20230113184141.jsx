import React from 'react'
import PropTypes from 'prop-types'

export default function UserItem({ user: { login, avatar_url } }) {
  return <div className="card shadow-md compact side bg-base-100">{login}</div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}