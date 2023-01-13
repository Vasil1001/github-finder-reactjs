import React from 'react'
import PropTypes from 'prop-types'

export default function UserItem({ user: { login, avatar_url } }) {
    return <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-2 card-body">
            {login}
        </div>

    </div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}