import React, { useState } from 'react'

const EventHandling = () => {

    let count = 0;

    // const [ readOnly, updateState ] = useState(0);
    
    const [visit, setVisit] = useState(1);

    const handleClick = () => {
        console.log('second button was clicked');
        // alert('Nice');
        count++;
        console.log(count); 
    }

    const updateState = () => {
        // visit++; ❌
        setVisit(visit + 1);
    }

  return (
    <div className='container'>

        <h3 className='text-center'>Event Handling</h3>
        <hr />

        <h4>Click Event</h4>
        <button className='btn btn-primary' 
        onClick={ () => { alert('You Clicked that button') } } >Click Me</button>

        <button className='btn btn-success' onClick={handleClick}>Using defined Function</button>
        <h1>{count}</h1>

        <button className='btn btn-danger' onClick={updateState}>Update State</button>
        <h1>{visit}</h1>
    </div>
  )
}

export default EventHandling;