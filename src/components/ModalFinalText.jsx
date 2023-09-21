import React from "react";
import Button from "../ui/Button.jsx";
import ModalComponent from "../ui/ModalComponent.jsx";

const ModalFinalText = ({create, reset, result}) => {
    const [getTime, getCounError, getSpeed] = result;

    return(
        <ModalComponent className={'modal_container'}>
            <ModalComponent className={'modal_item'}>
                <h1>Результаты:</h1>
                <ModalComponent className={'modal_item'}>
                    <h1>Время выполнения: {getTime} сек.</h1>
                    <h1>Количество ошибок: {getCounError}</h1>
                    <h1>Скорость печати: {getSpeed} сим/мин</h1>
                </ModalComponent>
            </ModalComponent>
            <ModalComponent className={'modal_btn'}>
                <Button onClick={reset}>Заново</Button>
                <Button onClick={create}>Новый</Button>
            </ModalComponent>
        </ModalComponent>
    );
};

export default ModalFinalText;