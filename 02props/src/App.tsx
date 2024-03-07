import React from 'react'
import Todo from './components/Todo/Index'

const myTodoItems = [
  {
    id:1,
    title: "Code"
  },
  {
    id:2,
    title: "Drink"
  },
  {
    id:3,
    title: "Sleep"
  }
]


const App: React.FC = () => {
  return (
    <div>
      <Todo items={myTodoItems}/>
      {/* <Todo items={myTodoItems}/>
      <Todo items={myTodoItems}/> */}
    </div>
  )
}

export default App
