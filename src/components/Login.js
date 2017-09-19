import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    // Hint: In order for this to work you'll need to use the withRouter HOC:
    // https://reacttraining.com/react-router/web/api/withRouter
    const { history } = this.props

    if (this.state.username === 'reactboy' && this.state.password === '1234') {
      history.push('/')
    }
  }

  render () {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl className="form-control" id="email" type="email" value="" placeholder="Enter email" />
          <FormControl className="form-control" id="password" type="password" value="" placeholder="Password" />
        </FormGroup>

        <Button bsSize="large" bsStyle="primary" block type="submit">Sign in</Button>
      </form>
    )
  }
}

export default Login
