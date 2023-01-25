import React from 'react'
import PropTypes from 'prop-types'

export default function RepoList({repos}) {
  return (
    <div className="rounded-lg">
    RepoList
    </div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
    
}