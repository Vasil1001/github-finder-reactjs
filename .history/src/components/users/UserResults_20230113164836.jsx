import React, { useEffect, useState } from 'react'

export default function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    setUsers(data);
    setLoading(false)
  }

  return (
    <div>
      div.grid.grid-cols-1.gap-8.
    </div>
  )
}
