import React from 'react'
import PropTypes from 'prop-types'

export default function RepoList({repos}) {
  return (
    <div className="repo-list">
    RepoList
    </div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
    
}