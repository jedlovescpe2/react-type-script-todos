import { FC, useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: FC<{onAddTodo: (text: string) => void}> = (props) =>{

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            // throw an error
        }

        props.onAddTodo(enteredText)

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