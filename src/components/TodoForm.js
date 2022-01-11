import {useState, useEffect, useRef} from 'react';

const TodoForm = ({addTodoHandler , edit}) => {
    // const [input, setInput] = useState("");
    // while clicked edit => prevValue come in input edit:
    const [input, setInput] = useState(edit ? edit.text : "");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, []);
   
    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!input) {
            alert("enter todo!");
            return;
        }
        addTodoHandler(input); //add or edit
        setInput("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <input 
                    type="text"
                    value={input}
                    onChange={changeHandler}
                    placeholder={edit ? "update value..." : "add new todo"}
                    ref={inputRef}
                />
                <button type="submit" className={`btn ${edit ? "updateTodo" : "addTodo"}`}>
                    {edit ? "Update" : "Add"}
                </button>
            </div>
        </form>
    );
}
export default TodoForm;