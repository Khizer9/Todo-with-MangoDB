import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch} from "react-redux";

export const Todos = () => {

    useEffect(() => {
        disptach (getAllTodos())    
    }, [])

    return (
        <div>Hello from Todo</div>
    )
}

export default Todos;