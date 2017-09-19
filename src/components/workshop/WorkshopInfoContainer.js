import React, {Component} from 'react'
import WorkshopInfo from './WorkshopInfo'
import PropTypes from 'prop-types'
import { fetchWorkshop } from '../../api/workshop'

class WorkshopInfoContainer extends Component {
  constructor() {
    super()
    this.state = { workshop: null }
  }

  componentDidMount() {
    this.fetchWorkshop(this.props.match.params.workshop)
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.workshop !== nextProps.match.params.workshop) {
     this.fetchWorkshop(nextProps.match.params.workshop)
   }
 }

  fetchWorkshop = (workshop) => {
    fetchWorkshop(workshop).then((data) => {
      this.setState({workshop : data})
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    return (
      <WorkshopInfo
        workshop={this.state.workshop}
      />
    )
  }
}

WorkshopInfoContainer.propTypes = {
  match: PropTypes.object.isRequired
}

export default WorkshopInfoContainer
