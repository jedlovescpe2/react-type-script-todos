import { FC, useRef, useContext } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "./store/todos-context";

const NewTodo: FC = () =>{

    const todosContext = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            // throw an error
        }

        // props.onAddTodo(enteredText)
        todosContext.addTodo(enteredText);

    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">
                <input type="text" id="text" ref={todoTextInputRef}/>
                <button>Add Todo</button>
            </label>
        </form>
    );
}

export default NewTodo;