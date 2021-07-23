import React from "react";

import "./Tarefa.css";

const Tarefa = ({ tarefa, handleTarefaClick }) =>{
    return (
        <div 
        className="tarefa-container " 
        style={tarefa.completed ? { borderLeft: "6px solid chartreuse" } : {} }
        >      
            <div className="tarefa-title" onClick={() => handleTarefaClick(tarefa.id)}>
                {tarefa.title}    
            </div>

            <div className="buttons-container">
                <button className="remove-tarefa-button">X</button>
            </div>
        </div>
    );
};

export default Tarefa;











