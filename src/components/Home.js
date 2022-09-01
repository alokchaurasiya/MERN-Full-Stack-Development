// 1. Components are JavaScript functions.
// 2. Function name should always start with uppercase letter.
// 3. Function should return a single JSX element.
// 4. Function should exported.

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
        <h1 className='myhead' style={ { color : 'red', border : '1px solid red', backgroundColor : 'yellow' } }>Home Page</h1>
        <input className='form-control' />
        <button className='btn btn-primary'>Welcome to React</button>
    </div>
  )
}

export default Home;