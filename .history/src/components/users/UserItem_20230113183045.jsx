import React from 'react'

export default function UserItem() {
  return <div>{user}</div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}