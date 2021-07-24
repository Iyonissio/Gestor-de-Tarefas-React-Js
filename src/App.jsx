import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Tarefas from './components/Tarefas';

import "./App.css";
import AddTarefa from "./components/AddTarefa";
import TarefaDetails from "./components/TarefaDetails";

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
  };

  const handleTarefaDeletion = (tarefaId) => {
    const novaTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
  
    setTarefas(novaTarefas);
  };
  
  return (
    <Router>
        <div className="container">
          <Header />
          <Route 
            path="/"
            exact
            render={() => (
              <>
                   <AddTarefa handleTarefaAddition={handleTarefaAddition}/>
                   <Tarefas 
                   tarefas={tarefas} 
                   handleTarefaClick={handleTarefaClick}
                   handleTarefaDeletion={handleTarefaDeletion}
                  />  
              </>
            )}
          />
          <Route path="/:tarefaTitle" exact component={TarefaDetails}/>
        </div>;
    </Router>
  );  
};

export default App;