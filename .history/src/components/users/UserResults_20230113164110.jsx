import React, { useEffect } from 'react'

export default function UserResults() {
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      
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
