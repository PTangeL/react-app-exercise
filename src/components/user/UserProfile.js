import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

class UserProfile extends Component {
  constructor() {
    super()
    this.state = { user: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser = (username) => {
    // This setTimeout is just to simulate the latency of a slow network
    setTimeout(() => {
      fetch(`/data/users/${username}.json`, {
          method: 'get'
      }).then((response) => {
          return response.json()
      }).then((data) => {
          this.setState({user : data})
      }).catch((err)=> {
          console.log(err)
      })
    },1000)
  }

  render() {
    const user = this.state.user
    const needsToFetchUser = user && user.username !== this.props.match.params.username

    // QUESTION X. Do you think this is a good place to have this condition?
    // Can you please move this code to UserProfileContainer componentWillReceiveProps
    // https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
    if (needsToFetchUser) {
      this.fetchUser(this.props.match.params.username)
    }

    if (!user || needsToFetchUser) {
      return <View>Loading...</View>
    }

    const username = user.username
    const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
    const email = user.email
    return (
      <View>
        <Card>
          <CardHeader
            title={fullname}
            subtitle={username}
            avatar={`/images/${username}_sm.jpg`}
          />
          <CardMedia
            overlay={<CardTitle title={email} />}
          >
            <img alt={username} src={`/images/${username}_lg.jpg`} />
          </CardMedia>
          <CardActions />
        </Card>
      </View>
    )
  }
}

// Prop types are very important, have a look to at link https://facebook.github.io/react/docs/typechecking-with-proptypes.html
UserProfile.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfile
