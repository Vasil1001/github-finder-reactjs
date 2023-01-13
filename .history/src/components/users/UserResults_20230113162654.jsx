import React, { useEffect } from 'react'

export default function UserResults() {
  useEffect(() => {

  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_TOKEN}`)
  }
  return (
    <div>
      user results
    </div>
  )
}
