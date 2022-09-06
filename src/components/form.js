import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  // function to handle user input change
  const inputTextHandler = (e) => {
    setInputText(e.target.value); //setting setInputText to e.target.value (user input)
  };

  //function to handle submit
  const submitTodoHandler = (e) => {
    e.preventDefault(); //prevents the default refresh of the page
    // setTodos updates the state to submitted user input text, completed is set to false, and uses math.random to give unique id
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText(""); //sets the a state variable back to empty string
  };

  return (
    <div>
      <form>
        {/* user input to input todos */}
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        {/* button to handle submit */}
        <button
          onClick={submitTodoHandler}
          className="todo=button"
          type="submit"
        >
          <i className="fas fa-plus-square">Submit</i>
        </button>
        {/* option to filter by all, completed and incomplete */}
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Incomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
