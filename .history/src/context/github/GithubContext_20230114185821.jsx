import React, { createContext } from 'react'

const GithubContext = createContext()
const GITHUB_URL = import.meta.env.VITE_GITHUB_TOKEN
export default function GithubContext() {
  return (
    <div>GithubContext</div>
  )
}
