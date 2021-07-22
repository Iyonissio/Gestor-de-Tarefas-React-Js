import React, { useState } from "react";
import Tarefas from './components/Tarefas';

import "./App.css";
import AddTarefa from "./components/AddTarefa";

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: "1",
      title: "Estudar Programacao",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar Historia",
      completed: true,
    }
  ]);
  
  return (
    <>
        <div className="container">
          <AddTarefa />
          <Tarefas tarefas={tarefas}/>  
        </div>;
    </>
  );  
};

export default App;