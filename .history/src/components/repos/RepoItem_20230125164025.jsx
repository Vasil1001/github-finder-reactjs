import React from 'react'
import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

export default function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
      } = repo

  return (
    <div>
    
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
    
}