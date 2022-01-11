import {useState, useEffect} from 'react';
import NavBar from './NavBar';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

 useEffect(() => {
   filterTodos(selectedOption.value);
 }, [todos, selectedOption]);

  //todos
  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted:false
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // item => findIndex => clone => not iscompleted => replace item to state
    const index = todos.findIndex((todo) => todo.id === id);
    //clone item: don't mutate
    const selectedTodo = { ...todos[index]};
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id , newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index]};
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch(status) {
      // case "All":
      //   setFilteredTodos(todos);
      //   break;
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted ) );
        break;
      case "unCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted ) );
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    // setSelectedOption(e.target.value);
    // filterTodos(e.target.value);
    //USE SELECT-ICON:
    setSelectedOption(e);
    filterTodos(e.value);
    console.log(e)
  };

  return (
    <div className="container">
        <NavBar 
          unCompletedTodos= {todos.filter(t => !t.isCompleted).length}
          selectedOption= {selectedOption}
          onChange={selectHandler}
        />
        <TodoForm addTodoHandler={addTodo} />
        <TodoList 
          todos={filteredTodos}
          onComplete={completeTodo}
          onDelete={removeTodo}
          onUpdateTodo={updateTodo}
        />
    </div>
  );
}
export default TodoApp;