import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import GithubContext from '../../context/github/GithubContext'
import {searchUsers} from '../../context/github/GithubActions'

export default function UserSearch() {
    const [text, setText] = useState('')
    const { users, dispatch, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert('Please enter a GitHub user', 'error')
        } else {
            // todo - search users
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({ type: 'GET_USERS', payload: users })

            setText('')
        }
    }

    // GET single user 
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    // MARK: GET user repos from account
    const getUserRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 items-center mb-10 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text"
                                className='w-full pr-40 bg-gray-200 input input-lg text-black rounded-2xl '
                                style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}

                            />
                            <button type='submit' className="absolute top-0 right-0 text-white rounded-l-none rounded-r-xl w-36 btn btn-primary btn-lg" style={{ borderTopRightRadius: '0.92rem', borderBottomRightRadius: '0.92rem' }}>Go</button>

                        </div>
                    </div>
                </form>

            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={clearUsers} className="btn btn-ghost mb-2 btg-lg rounded-xl justify-baseline mt-5">Clear</button>
                </div>
            )}
        </div>
    )
}
