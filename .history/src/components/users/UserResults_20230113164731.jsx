import React, { useEffect, useState } from 'react'

export default function UserResults() {
  const [users, setUsers] = useState([])
  const [users, setUsers] = useState([])
  
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
    console.log(data);
  }

  return (
    <div>
      user results
    </div>
  )
}
