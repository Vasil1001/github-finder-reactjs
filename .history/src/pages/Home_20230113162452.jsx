import React from 'react'
import UserResult from '../components/users/UserResult'
import.meta.env.VITE_GITHUB_TOKEN

export default function Home() {
    return (
        <div>
            <h1 className="text-6xl text-yellow-400 ">Welcome to Home Page</h1>
            ?
            <UserResult />
        </div>
    )
}
