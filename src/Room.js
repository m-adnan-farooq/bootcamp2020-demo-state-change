import React, {useState} from 'react';
import './Room.css'
function Room(){
    const[isLit, setLit] = useState(true);
    const brightness = isLit? 'lit' : 'dark';
    let[age, setAge] = useState(23);

function increaseAge(){
    setAge(++age);
}

    return (
        <div className={`room ${brightness}`}>
            <h1>Learning State Changes</h1>
            
            This Room is {isLit? "lit" : 'dark'}
            <br />
            <button onClick= {()=> setLit(!isLit)}>Toggle light</button>
            <br />
            <br />
            Age: {age}
            <br />
            <button onClick= {increaseAge}>Increase Age</button>
        </div>
    )
}
export default Room;