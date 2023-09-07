import React, {useState} from "react";
import countError from "./countError.js";

export const useCreateSpan = (array) => {

    const [span, setSpan] = useState(array);
    const [counter, setCounter] = useState(0);

    const createSpan = (key) => {
        if(key === 'Backspace' && counter > 0) {
     
            setSpan((prevSpan) => {
                return prevSpan.map((elem, index) => {
                    return (index === counter - 1) ? {...elem, status: 'none'} : elem;
                })
            });
    
            setCounter((prevCount) => prevCount - 1);
        }
    
        if ((!(key.length > 1) || key == 'Space') && span.length > counter) {
    
            setSpan((prevSpan) => {
                return prevSpan.map((elem, index) => {
                    
                    if(index === counter) {
                        if(key === elem.text) {
                            return {...elem, status: 'true'};
                        } else {
                            countError.counter();
                            return {...elem, status: 'false'};
                        }
                    }
    
                    return elem;
                });
            });
    
            setCounter((prevCount) => prevCount + 1);
        }
    }



    return [span, createSpan]
} 

