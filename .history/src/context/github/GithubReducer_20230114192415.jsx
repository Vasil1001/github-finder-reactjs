const githubReducer = (state, action) => {

}

import React from 'react'
import { connect } from 'react-redux'

export const GithubReducer = (props) => {
  return (
    <div>GithubReducer</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GithubReducer)