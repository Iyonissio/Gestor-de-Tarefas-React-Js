import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({ tarefas, handleTarefaClick }) => {
  return (
    <>
      {tarefas.map((tarefa) => (
        <Tarefa tarefa={tarefa} handleTarefaClick={handleTarefaClick} />
      ))}
    </>
  );
};

export default Tarefas;
