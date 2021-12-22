import React, {useState, useEffect} from 'react'

const HooksCounterOne = () => {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(
        () => {
        // document.title = `Counter Value - ${counter}`
        alert(counter);
        console.log("Invoked!!");
    },[counter]
    )
    useEffect(
        () => {
        document.title = `Counter Value - ${counter}`
        console.log("Invoked Second!!");
    },[counter2]
    )

    return (
        <div>
            <button onClick={()=>setCounter(counter +1)}>
                Click Me Hooks
            </button>
            <button onClick={()=>setCounter2(counter2 +1)}>
                Click Me
            </button>
            <h1>{counter}</h1>
        </div>
    )
}

export default HooksCounterOne
