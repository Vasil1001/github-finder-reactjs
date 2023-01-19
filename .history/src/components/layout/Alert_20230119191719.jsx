import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

export default function Alert() {
    const { alert } = useContext(AlertContext)
  return alert !== null && (
    p.flex.items-start.mb-4.space-x-2
  )
}
