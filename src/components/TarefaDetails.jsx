import React from 'react';
import { useHistory,useParams } from 'react-router-dom';

import Button from './Button';
import './TarefaDetails.css';

const TarefaDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="voltar-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="tarefa-details-container">
                <h2>{params.tarefaTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit.
                     Saepe velit magnam provident
                         expedita rem. Labore?
                </p>
            </div>
        </>
    );
}

export default TarefaDetails;