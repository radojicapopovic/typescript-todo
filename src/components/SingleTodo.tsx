import React from "react";
import { Todo } from "../model";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text"> {todo.todo}</span>
      <div>
        <span className="icon">
          <AiTwotoneEdit />
        </span>
        <span className="icon">
          <AiTwotoneDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
