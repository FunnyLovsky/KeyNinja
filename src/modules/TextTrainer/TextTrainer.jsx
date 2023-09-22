import React, { useState } from 'react';

import ModalFinalText from '../../components/ModalFinalText.jsx';
import ModalStartText from '../../components/ModalStartText.jsx';
import TextInputItem from './component/TextInputItem.jsx';

import { useArrayTransform } from './hooks/useArrayTransform.js';
import { useCountError } from './hooks/useCountError.js';
import { useWorkTimer } from './hooks/useWorkTimer.js';
import { resultProvider } from './hooks/resultProvider.js';

const TextTrainer = () => {
    const { countError, clearError, incrementError } = useCountError();
    const { startTime, startWork } = useWorkTimer();
    const { array, position, setPosition, createArray, resetArray, createSpan } =
        useArrayTransform();
    const getResult = resultProvider();

    const [start, setStart] = useState(false);
    const [reset, setReset] = useState(false);

    const changeSpan = (e) => {
        e.preventDefault();
        createSpan(e.key, incrementError);
    };

    const getNewText = () => {
        clearError();
        startWork();
        setPosition(0);
        createArray();
    };

    const startTest = () => {
        clearError();
        startWork();
        setStart(true);

        if (!reset) {
            createArray();
        }
    };

    const resetText = () => {
        clearError();
        setStart(false);
        startWork();
        setPosition(0);
        setReset(true);
        resetArray();
    };

    return (
        <div className="text_input_container">
            {!start && <ModalStartText start={startTest} />}

            {start && array.length === position && (
                <ModalFinalText
                    create={getNewText}
                    reset={resetText}
                    result={getResult(array, startTime, countError)}
                />
            )}

            {start && array.length !== position && (
                <TextInputItem
                    createSpan={changeSpan}
                    resetText={resetText}
                    span={array}
                    newText={getNewText}
                />
            )}
        </div>
    );
};

export default TextTrainer;
