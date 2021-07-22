import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({ tarefas }) => {
    return (
        <>
            {tarefas.map((tarefa) =>(
                <Tarefa tarefa={tarefa}/>
            ))}
        </>
    );
};

export default Tarefas;