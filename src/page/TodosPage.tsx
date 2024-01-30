import { FC, useEffect, useState } from "react";
import { ITodo } from "../components/types/Types";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import List from "../components/List";

const TodosPage:FC = () => {
  const URL2: string = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, [])

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>(URL2);
      setTodos(res.data);
    } catch (e) {
      alert(e);
    }
  }

  return(
    <List 
      items={todos} 
      renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}
    />
  )
}

export default TodosPage;