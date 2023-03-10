import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
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

    return <>
        <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
                <Link to="/" className="btn btn-ghost">
                    Back To Search
                </Link>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="custom-card image mb-6 md:mb-0">
                    <div className="rounded-lg shadow-xl card image-full">
                        <figure>
                            <img src={avatar_url} alt="Profile Image" />
                        </figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title mb-0">
                                {name}
                                <p>{login}</p>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
