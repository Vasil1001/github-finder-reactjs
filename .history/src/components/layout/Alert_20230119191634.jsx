import React from 'react'
import AlertContext from '../../context/alert/AlertContext'

export default function Alert() {
    const { alert } = useContext(AlertContext)
  return (
    <div>Alert</div>
  )
}
