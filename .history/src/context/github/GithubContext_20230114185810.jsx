import React, { createContext } from 'react'

const GithubContext = createContext()
const GITHUB_URL = import.meta.env.GITHUB_URL
export default function GithubContext() {
  return (
    <div>GithubContext</div>
  )
}
