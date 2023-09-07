import React from "react";

import ModalComponent from "../../../ui/ModalComponent.jsx";
import Button from "../../../ui/Button.jsx";

const TextInputItem = React.forwardRef(({createSpan, resetText, span, newText}, ref) =>  {

    return(
        <ModalComponent className={''}>
            <div tabIndex={1} onKeyDown={(e) => createSpan(e)} ref={ref} className="text_input" >

                {span.map(item => <span key={item.id} className={item.status}>{item.text}</span>)}
                
            </div>
            <ModalComponent className={'text_input_item'}>

                <Button onClick={resetText}>Сброс</Button>
                <Button>Настройки</Button>
                <Button onClick={newText}>Новый</Button>

            </ModalComponent>
        </ModalComponent>
    );
});

export default TextInputItem;
