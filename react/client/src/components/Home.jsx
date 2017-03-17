import React from 'react'
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'
import Nav from './Nav';

const Home = () => (
  <div className="home">
  <Nav />
    <h1 className='title'>The Critical Thinker</h1>
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Home