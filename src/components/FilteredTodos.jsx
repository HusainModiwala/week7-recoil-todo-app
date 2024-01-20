import { useRecoilValue } from "recoil";
import filteredTodos from "../state/selectors/filteredTodos.js"

const FilteredTodos = () => {
    const filteredTodosList = useRecoilValue(filteredTodos);

    return (
        <>
            {
                filteredTodosList.map((todo) => <Todo key={todo.title} title={todo.title} description={todo.description} />)
            }
        </>
    )
}

function Todo({title, description}) {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    )
}

export default FilteredTodos;