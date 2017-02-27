import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Articles from './components/Articles'
import Main from './components/Main'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/articles' component={Articles} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
