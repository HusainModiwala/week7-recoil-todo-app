import { useSetRecoilState } from "recoil";
import todosAtom from "../state/atoms/todosAtom.js";
import { useState } from "react";

const AddTodo = () => {
    const setTodos = useSetRecoilState(todosAtom);
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDesc, setTodoDesc] = useState("");

    function handleOnClick() {
        const todo = {
            title: todoTitle,
            description: todoDesc
        }
        setTodos(todos => [...todos, todo]);

    }

    return(
        <>
            <br/>
            <input 
                placeholder="Enter todo title"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <br/>
            <input 
                placeholder="Enter todo description"
                value={todoDesc}
                onChange={(e) => setTodoDesc(e.target.value)}
            />
            <br/>
            <button onClick={handleOnClick}>
                Add Todo
            </button>
            <br/>
            <br/>
        </>
    )
}

export default AddTodo;