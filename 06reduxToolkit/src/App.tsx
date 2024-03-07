import './App.css'
import MyComponent from './components/MyComponent'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  
  return (
    <>
      <h1>Count is : {count} </h1>

      <button 
        style={{marginRight: "10px"}}
        onClick={() => dispatch(increment())}
        >
          Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        >
          Decrement
      </button>

      <div style={{margin: "100px"}}></div>
      <MyComponent />
    </>
  )
}

export default App
