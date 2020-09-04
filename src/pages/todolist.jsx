import React from "react";

import Paper from "../componets/paper";
import Header from "../componets/header";
import TodoForm from "../componets/todofrom";
import Todos from "../componets/todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
}
