import React from "react";

import ModalComponent from "../../../ui/ModalComponent.jsx";
import TextInput from '../../../components/textInput/textInput.jsx';
import Button from "../../../ui/Button.jsx";

const TextInputItem = React.forwardRef(({createSpan, resetText, span, newText}, ref) =>  {

    function create(e) {
        createSpan(e);
    }

    function reset() {
        resetText();
    }

    function newtext() {
        newText();
    }

    return(
        <ModalComponent className={''}>
            <div tabIndex={1} onKeyDown={create} ref={ref} className="text_input" >
                {  
                    span.map((item, index) => {return <span key={item.id} className={item.status}>{item.text}</span>}) 
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
