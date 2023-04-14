import { FC, createContext, useState } from "react";
import Todo from "../../models/todo";

const TodosContext = createContext<{
  items: Todo[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});



// const TodosContextProvider: FC = (props) => {
//     useState();
//   return <TodosContext.Provider>{props.children}</TodosContext.Provider>;
// };
