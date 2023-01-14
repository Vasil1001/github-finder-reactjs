import React from 'react'
import PropTypes from 'prop-types'

export default function UserItem({ user: { login, avatar_url } }) {
    return <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">

            <div>
                <div className="avatar">
                    <div className="mask mask-squircle shadow w-14 h-14">
                        <img src={avatar_url} alt="Profile" />
                    </div>
                </div>
            </div>
           
            <div>
                <h2 className="card-title">{login</h2>
            </div>
            
        </div>

    </div>
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}