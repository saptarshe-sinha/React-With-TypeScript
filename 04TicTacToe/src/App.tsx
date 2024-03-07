import { useState } from 'react'
import './App.css'
import Block from './components/Block'

function App() {

  const initialState = Array(9).fill(null)
  const [state, setState] = useState<any[]>(initialState)
  const [currentTurn, setCurrentTurn] = useState<string>("X")
 
  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i=0; i<win.length; i++){
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        return true;
      }    
    }
    return false;
  }

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state)

    // if ( stateCopy[index] === null) {
    //   stateCopy[index] = currentTurn
    //   setState(stateCopy)
    //   
    //   // Check if someone won
    //   if (checkWinner(stateCopy)) {
    //     alert(`Player ${currentTurn} Won The Game`)
    //   }
    //   
    //   // Flip the "currentTurn"
    //   setCurrentTurn(currentTurn === "X" ? "0" : "X")
    //  } else {
    //     return 
    //  }

    // We can implement the above code as follows
    if (stateCopy[index] !== null) return;
    
    stateCopy[index] = currentTurn
    setState(stateCopy)
    
    // Check if someone won
    if (checkWinner(stateCopy)) {
      alert(`Player ${currentTurn} Won The Game`)
      // window.location.href = "/";
      // window.location.reload();
      setState(initialState)
      
    }

    // Flip the "currentTurn"
    setCurrentTurn(currentTurn === "X" ? "0" : "X")  
    
  };
  

  return (
    <div className='board'>
      <div className="row">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  )
}

export default App
