import React, { useState } from 'react'
import Counter from './components/Counter/Counter'

const App: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(true)
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {
        toggle ? 
        <div>
          <Counter/>
          {/* <Counter/>
          <Counter/> */}
        </div> : ""
      }
      
    </div>
  )
}

export default App
