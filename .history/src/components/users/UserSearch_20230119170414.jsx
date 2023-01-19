import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

export default function UserSearch() {
    const [text, setText] = useState('')
    const { users, searchUsers } = useContext(GithubContext)
    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            alert('Please enter a GitHub user')
        } else {
            // todo - search users
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className='grid grid-cols-1  mb-8 gap-8 items-center justify-center'>
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
                    {users.length > 0 && (
                        <div>
                            <button className="btn btn-ghost mb-2 btg-lg rounded-xl mt-5">Clear</button>
                        </div>
                    )}
                </div>

            </div>




        </div>
    )
}
