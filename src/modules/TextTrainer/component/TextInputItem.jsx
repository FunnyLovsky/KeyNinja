import React, { useEffect, useRef } from "react";

import ModalComponent from "../../../ui/ModalComponent.jsx";
import Button from "../../../ui/Button.jsx";

const TextInputItem = ({createSpan, resetText, span, newText}) =>  {

    const inputElem = useRef();

    useEffect(() => {
        activeInput()
    }, [])

    const activeInput = () => {
        console.log('active input');
        inputElem.current.focus()
    }

    return(
        <ModalComponent className={''}>
            <div onKeyDown={(e) => createSpan(e)} className="text_input" onClick={activeInput}>

                <input 
                    type="text" 
                    autoCorrect="off" 
                    spellCheck="false" 
                    autoCapitalize="off" 
                    autoComplete="off"
                    ref={inputElem} 
                    onBlur={activeInput}
                />
                
                {span.map(item => <span key={item.id} className={item.status}>{item.text}</span>)}
                
            </div>
            <ModalComponent className={'text_input_item'}>

                <Button onClick={resetText}>Сброс</Button>
                <Button>Настройки</Button>
                <Button onClick={newText}>Новый</Button>

            </ModalComponent>
        </ModalComponent>
    );
};

export default TextInputItem;
