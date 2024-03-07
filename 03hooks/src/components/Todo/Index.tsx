import React from "react";
import TodoItem from "./TodoItem/Index";
import './style.css'

interface TodoItem {
    id: number;
    title: string;
}

interface TodoProps {
    items: TodoItem[]
}

const Todo: React.FC<TodoProps> = ({items}) => {

    return (
        <div className="todo-container">
            <ol>
                {
                    items.map((item)=>(
                        <TodoItem key={item.id} title = {item.title} />
                    ))
                }
            </ol>
        </div>
    )
}

export default Todo;