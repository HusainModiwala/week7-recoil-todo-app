import { useSetRecoilState } from "recoil";
import filterAtom from "../state/atoms/filterAtom.js";

const FilterTodo = () => {
    const setFilter = useSetRecoilState(filterAtom);

    return(
        <>
            <input 
                placeholder="Enter filter criteria..."
                onChange={(e) => setFilter(e.target.value)}
            />
            <br/>
        </>
    )
}

export default FilterTodo;