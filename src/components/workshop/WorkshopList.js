import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { pinkA200 } from 'material-ui/styles/colors'
import { LARGE } from 'material-ui/utils/withWidth'
import { Route, Switch, withRouter } from 'react-router-dom'

import View from '../layout/View'
import WorkshopInfoContainer from './WorkshopInfoContainer'

const WorkshopList = ({ workshops = [], match, history, width}) => {
  const showWorkshop = (workshop) => {
    history.push(`/workshops/${workshop.id}`)
  }

  let listItems

  if (workshops.length === 0) {
    listItems = <View>Loading...</View>
  } else {
    listItems = (
      <View>
        { workshops.map(workshop => (
          <ListItem
            onClick={() => { showWorkshop(workshop) }} key={workshop.id} style={{color: "black"}}
            primaryText={ `${workshop.title}`}
            leftIcon={<ActionGrade color={pinkA200} />}
          />
        ))}
      </View>
    )
  }

  return (
    <View style={{ display: 'flex' }}>
      <Route
        exact={width < LARGE}
        path={`${match.url}`}
        render={() => listItems }
      />
      <Switch>
        <Route path={`${match.url}/:workshop`} component={WorkshopInfoContainer} />
        <Route exact path={width < LARGE ? `/` : null} component={View} />
      </Switch>
    </View>
  )
}

export default WorkshopList


WorkshopList.propTypes = {
  history: PropTypes.object.isRequired,
  workshops: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired
}
