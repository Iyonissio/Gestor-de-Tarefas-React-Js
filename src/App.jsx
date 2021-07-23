import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

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

  const handleTarefaClick = (tarefaId) => {
    const novaTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaId) return { ...tarefa, completed: !tarefa.completed }

      return tarefa;
    });
    setTarefas(novaTarefas);
  };

  const handleTarefaAddition = (tarefaTitle) => {
    const novaTarefas = [
      ...tarefas,
      {
        title: tarefaTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTarefas(novaTarefas);
  }
  
  return (
    <>
        <div className="container">
          <AddTarefa handleTarefaAddition={handleTarefaAddition}/>
          <Tarefas tarefas={tarefas} handleTarefaClick={handleTarefaClick}/>  
        </div>;
    </>
  );  
};

export default App;