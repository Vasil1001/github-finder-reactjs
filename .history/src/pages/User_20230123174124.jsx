import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { FaCodePen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'

export default function User() {
    const { getUser, user, loading } = useContext(GithubContext)

    const params = useParams()
    useEffect(() => {
        getUser(params.login)
    }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if (loading) {
        return <Spinner />
    }

    return <></>
}
