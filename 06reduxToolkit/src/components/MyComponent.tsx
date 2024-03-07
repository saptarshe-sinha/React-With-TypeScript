import React from 'react'
import '../App.css'
import { useAppSelector } from '../redux/hooks'

const MyComponent: React.FC = () => {
  const count = useAppSelector((s) => s.counter)
  return (
    <div>
      <h2> Counter in My Component is : {count} </h2>
    </div>
  )
}

export default MyComponent;
