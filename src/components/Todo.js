const Todo = ({todo, onComplete, onDelete, onEdit }) => {
    return (
        <div className="todo">
            {/* <div className={todo.isCompleted ? "completed" : ""}>
                {todo.text}
            </div> */}
            {/* add one class and one contional class: */}
            <div className={`todoText  ${todo.isCompleted ? "completed" : ""}  `}>
                {todo.text}
            </div>
            <div>
                <button onClick={onEdit} className="btn"> Edit </button>
                <button onClick={onComplete} className="btn" > Complete </button>
                <button onClick={onDelete} className="btn remove"> Delete </button>
            </div>
        </div>
    );
}
export default Todo;