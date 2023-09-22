import { useState } from 'react';
import arrayTexts from '../data/textTrainer.js';

export const useArrayTransform = () => {
    const [array, setArray] = useState([]);
    const [countArray, setCountArray] = useState(0);
    const [position, setPosition] = useState(0);

    const texts = arrayTexts;

    const createArray = () => {
        if (texts.length - 1 <= countArray) {
            setCountArray(0);
        }

        const newText = texts[countArray].split('').map((element) => {
            return {
                id: Math.floor(Date.now() / (Math.random() * 10)),
                text: element,
                status: 'none',
            };
        });

        setArray([...newText]);
        setCountArray((prevCount) => prevCount + 1);
    };

    const resetArray = () => {
        const newArray = array.map((elem) => {
            return { ...elem, status: 'none' };
        });

        setArray([...newArray]);
    };

    const createSpan = (key, countError) => {
        if (key === 'Backspace' && position > 0) {
            const span = array.map((elem, index) => {
                return index === position - 1 ? { ...elem, status: 'none' } : elem;
            });

            setArray([...span]);
            setPosition((prevPos) => prevPos - 1);
        }

        if ((!(key.length > 1) || key == 'Space') && array.length > position) {
            const span = array.map((elem, index) => {
                if (index === position) {
                    if (key === elem.text) {
                        return { ...elem, status: 'true' };
                    } else {
                        countError(1);
                        return { ...elem, status: 'false' };
                    }
                }

                return elem;
            });

            setArray([...span]);
            setPosition((prevPos) => prevPos + 1);
        }
    };

    return {
        array,
        position,
        setPosition,
        createArray,
        resetArray,
        createSpan,
    };
};
