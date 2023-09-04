import React from "react";

import ModalComponent from "../../../ui/ModalComponent.jsx";
import Button from "../../../ui/Button.jsx";

const TextInputItem = React.forwardRef(({createSpan, resetText, span, newText}, ref) =>  {

    const create = (e) => {
        createSpan(e);
    }

    const reset = () => {
        resetText();
    }

    const newtext = () => {
        newText();
    }

    return(
        <ModalComponent className={''}>
            <div tabIndex={1} onKeyDown={create} ref={ref} className="text_input" >
                {  
                    span.map(item => <span key={item.id} className={item.status}>{item.text}</span>) 
                }
            </div>
            <ModalComponent className={'text_input_item'}>
                <Button onClick={reset}>Сброс</Button>
                <Button>Настройки</Button>
                <Button onClick={newtext}>Новый</Button>
            </ModalComponent>
        </ModalComponent>
    );
});

export default TextInputItem;
