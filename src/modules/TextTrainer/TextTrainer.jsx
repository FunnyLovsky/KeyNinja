import React, {useEffect, useRef, useState} from "react";

import ModalFinalText from "../../components/modalFinalText/ModalFinalText.jsx";
import ModalStartText from "../../components/modalStartText/ModalStartText.jsx";
import TextInputItem from "./component/TextInputItem.jsx";

import App from './app/app.js';
import countError from "./app/countError.js";
const app = new App();


const TextTrainer = () => {

    let [counter, setCounter] = useState(0);
    let [span, setSpan] = useState([]);
    let [start, setStart] = useState(false);
    let [reset, setReset] = useState(false);

    const textInput = useRef();

    useEffect(() => {
        const elem = textInput.current;
        if(elem) {
            elem.focus();
            console.log('focus')
        }

    }, [start, reset])
    

    const createSpan = (e) => {
        e.preventDefault();

        if(e.key === 'Backspace' && counter > 0) {
     
            setSpan((prevSpan) => {
                return prevSpan.map((elem, index) => {
                    return (index === counter - 1) ? {...elem, status: 'none'} : elem;
                })
            });

            setCounter((prevCount) => prevCount - 1);
        }

        if ((!(e.key.length > 1) || e.key == 'Space') && span.length > counter) {
            let arrSpan = [...span];

            if((e.key == arrSpan[counter].text)) {
                arrSpan[counter].status = 'true';
                
            } else {
                arrSpan[counter].status = 'false';
                countError.counter();
            }
    
            setSpan(arrSpan);
            setCounter(counter = counter + 1);
        }
    }

    const getNewText = () => {
        countError.clear();
        app.start()
        setCounter(counter = 0);
        setSpan([...app.getArray()]);
    }

    const startTest = () => {
        countError.clear();
        setStart(true);
        app.start();
        
        (!reset) ? setSpan([...app.getArray()]) : setReset(false);
    }

    const resetText = () => {
        countError.clear();
        setStart(false);
        app.start();
        setCounter(counter = 0);
        setReset(true);
        setSpan([...app.resetArray()]);
    }

    return(
        <div className="text_input_container">
            {
                (!start) ? <ModalStartText start={startTest} textInput={textInput}/> : 

                    (span.length == counter) ? <ModalFinalText create={getNewText} reset={resetText} timer={app}/> :

                    <TextInputItem ref={textInput} createSpan={createSpan} resetText={resetText} span={span} newText={getNewText}/>
            }
        </div>
        
    )
};

export default TextTrainer;
