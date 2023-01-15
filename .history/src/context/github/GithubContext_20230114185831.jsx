import React, { createContext } from 'react'

const GithubContext = createContext()
const GITHUB_URL = <import className="meta env VITE_GITHUB_URL"></import>
export default function GithubContext() {
  return (
    <div>GithubContext</div>
  )
}
