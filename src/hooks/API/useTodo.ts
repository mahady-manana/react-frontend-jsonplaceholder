import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListTodos } from './API';
import { TodoType } from '../interface';

interface useTodoProps {
  userId?: number | string;
}
export const useTodo = ({ userId }: useTodoProps) => {
  const [todo, setTodo] = useState<TodoType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const cancelToken = axios.CancelToken.source();
    const getTodo = async () => {
      const todos = await ListTodos(cancelToken.token, userId);
      console.log(todos);
      setTodo(todos);
      setLoading(false);
    };
    getTodo();
    return () => cancelToken.cancel();
  }, [userId]);
  return {
    todos: todo,
    loading: loading,
  };
};
