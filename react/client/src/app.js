import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import Home from './components/Home'
import Articles from './components/Articles'
import FactChecks from './components/FactChecks'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/articles' component={Articles} />
          <Route path='/factChecks' component={FactChecks} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
