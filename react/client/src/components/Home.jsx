import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'

const Home = () => (
  <div className="home">
  <nav className='navbar'>
    <Link to='/' className='title'>The Critical Thinker</Link>
    <Link to='/articles' className='articles'>Articles</Link>
  </nav>
    <h1 className='title'>The Critical Thinker</h1>
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Home