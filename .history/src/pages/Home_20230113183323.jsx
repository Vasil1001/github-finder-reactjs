import React from 'react'
import UserResults from '../components/users/UserResults'
import.meta.env.VITE_GITHUB_TOKEN

export default function Home() {
    return (
        <div>
            <h1 className="text-5xl text-yellow-400 pb-10 text-center">Welcome to <b>GitHub find</b></h1>
            
            {/* SEARCH COMPONENT */}
            <UserResults />
        </div>
    )
}
