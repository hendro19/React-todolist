import React from "react";
import "./styles.css";
import Paper from "./componets/paper";
import Header from "./componets/header";
import Header from "./componets/todofrom";
import Header from "./componets/todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
}
