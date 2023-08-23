import React from "react";

import Button from "../../ui/Button.jsx";
import ModalComponent from "../../ui/ModalComponent.jsx";



const ModalStartText = ({start}) => {

    function startModal() {
        
        start()
    }

    return(
        <ModalComponent className={'modal_container'}>
            <ModalComponent className={'modal_item'}>
                <h1>Настройки теста:</h1>
            </ModalComponent>
            <ModalComponent className={'modal_btn'}>
                <Button onClick={startModal}>Начать</Button>
            </ModalComponent>
        </ModalComponent>
    );
};

export default ModalStartText;