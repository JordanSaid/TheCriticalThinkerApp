import React from 'react'
import { Link, browserHistory } from 'react-router'

const Nav = function (props) {

    return (
        <nav className='navbar'>
        <div className="float-left">
        <Link to='/' className='title'>The Critical Thinker</Link>
        <Link to='/articles' className='articles'>Articles</Link>
        </div>
        <div className="float-right">
        <Link to='/login' className='login'>Login</Link>
        </div>
      </nav>
     
  )

}

const { string, text } = React.PropTypes


export default Nav