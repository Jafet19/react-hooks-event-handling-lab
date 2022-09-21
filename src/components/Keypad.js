// Code Keypad Component Here
import React from 'react'
function handleChange(){
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input onChange={handleChange} type='password'></input>
        </div>
    )
}

export default Keypad;