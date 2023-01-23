import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { FaCodePen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function User() {
    const { getUser, user } = useContext(GithubContext)

    const params = useParams()
    useEffect(() => {
        getUser(params.login)
    }, [])

    return (
        <div>
            {user.login}
        </div>
    )
}
