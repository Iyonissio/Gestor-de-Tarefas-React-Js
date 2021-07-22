import React from "react";

import "./Tarefa.css";

const Tarefa = ({tarefa}) =>{
    return <div className="tarefa-container ">{tarefa.title}</div>;
}

export default Tarefa;

