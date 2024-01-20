import { selector } from "recoil";
import filterAtom from "../atoms/filterAtom.js";
import todosAtom from "../atoms/todosAtom.js";

const filteredTodos = selector({
    key: "filterTodos",
    get: ({get}) => {
        const todos = get(todosAtom);
        const filter = get(filterAtom);

        return todos.filter((todo) => todo.title.includes(filter) || todo.description.includes(filter));
    }
});

export default filteredTodos;