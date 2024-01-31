import { FC, useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { ITodo } from "../components/types/Types";
import axios from "axios";
import TodoItem from "../components/TodoItem";

interface TodoItemPageParams extends Params {
  id: string;
}

const TodoItemPage:FC = () => {
  const URL2: string = "https://jsonplaceholder.typicode.com/todos";
  const params = useParams<TodoItemPageParams>();
  
  const [todo, setTodo] = useState<ITodo | null>();

  useEffect(() => {
    fetchTodos();
  })

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo>(URL2 + '/' + params.id);
      setTodo(res.data);
    } catch (e) {
      alert(e);
    }
  }

  return(
    <div>
      {todo 
      ? <TodoItem todo={todo}/>
      :<h1>Ожидаю данные...</h1>}
    </div>
  )
}

export default TodoItemPage;