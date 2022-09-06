import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    // function to handle delete
    const deleteHandler = () => {
        //checks id and filters to delete
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    //function to mark an item as complete and set property to true
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) { //comparing the one clicked to the state
                return {
                    ...item, completed: !item.completed
                } //above wants to keep all original properties, except flip completed to true (originally false)
            }
            return item; //returning item if did not match
        }))
    }


    return (
        <div>
            <div className="todo">
                <li className={`todo-item-${todo.completed ? "completed" : ''}`}>
                    {text}
                </li>
                <button onClick={completeHandler} className="complete-button">Complete</button>
                <button onClick={deleteHandler} className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default Todo;