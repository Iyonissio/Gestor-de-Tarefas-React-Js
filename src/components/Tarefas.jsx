import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({ tarefas, handleTarefaClick, handleTarefaDeletion }) => {
  return (
    <>
      {tarefas.map((tarefa) => (
        <Tarefa 
        tarefa={tarefa} 
        handleTarefaClick={handleTarefaClick} 
        handleTarefaDeletion={handleTarefaDeletion}/>
      ))}
    </>
  );
};

export default Tarefas;
