import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number
}

function App() {

  const [todos, setTodos] = useState<TodoItem[]>([])
  const [loading, setLoading] = useState<Boolean>(true)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((res) => res.json())
  //   .then((data) => setTodos(data as TodoItem[]))
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }, [])

  // Using Axios

  useEffect(() => {
    axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
    .then((res) => setTodos(res.data))
    .catch((err) => {
      console.log(err)
    })
    .finally(() => setLoading(false))
  }, [])


  return (
    <>
      { 
        loading ? <div style={{fontSize: "3rem", fontWeight: "bolder"}}>Loading...</div> :
        todos.map((todo)=> <li key={todo.id}>{todo.title}</li>)  
      }
    </>
  )
}

export default App
