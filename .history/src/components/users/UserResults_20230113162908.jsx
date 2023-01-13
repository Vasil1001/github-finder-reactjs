import React, { useEffect } from 'react'

export default function UserResults() {
  useEffect(() => {

  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    clg
  }

  return (
    <div>
      user results
    </div>
  )
}
