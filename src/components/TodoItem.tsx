import {FC} from "react";
import {ITodo} from "./types/Types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo, ...props}) => {
  return(
    <div>
      <input type="checkbox" checked={todo.completed}/>
      {todo.id}. {todo.title}
    </div>
  )
}

export default TodoItem;