import React from 'react';

import Button from './Button';

import "./AddTarefa.css";

const AddTarefa = () => {
    return (
        <div className="add-tarefa-container">
            <input className="add-tarefa-input" type="text" />
            <div className="add-tarefa-button-container">
                <Button>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTarefa;