import React, { useEffect, useState } from "react";
import './style.css'

const Counter:React.FC = () => {

    const [count, setCount] = useState<number>(0)
    // const [name, setName] = useState<string>("Rishi")

    // useEffect on "Mounting"
    useEffect(() => {
        console.log("Counter Mounted")
    }, [])

    // useEffect on "updation"
    useEffect(()=> {
        console.log("User Updated Count", count)
        return () => {
            console.log ("Counter UseEffect Return", count)
        }
    }, [count])

    // useEffect on "Unounting"
    useEffect(() => {
        return () => {
            console.log ("Unmount Counter")
        }
    }, [])

    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        if (count === 0) {
            return;
        } 
        setCount(count-1)
    }

    return (
        <div className="counter-container">
            <h1>Count : {count}</h1>

            <button 
                style={{backgroundColor: "lightgreen"}}
                onClick={handleIncrement}
            >
                Incement
            </button>

            <button 
                style={{backgroundColor: "tomato"}}
                onClick={handleDecrement}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter;