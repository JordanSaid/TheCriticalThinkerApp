import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/Main'
import Home from './containers/Home'
import Articles from './containers/Articles'
import FactChecks from './containers/FactChecks'
import Login from './containers/Login'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/articles' component={Articles} />
          <Route path='/factChecks' component={FactChecks} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
