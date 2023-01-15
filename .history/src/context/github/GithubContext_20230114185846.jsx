import React, { createContext } from 'react'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_URL

export default function GithubContext() {
  return (
    <div>GithubContext</div>
  )
}
