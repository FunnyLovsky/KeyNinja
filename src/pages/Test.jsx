import React, { useEffect } from 'react';

import Header from '../ui/Header.jsx';

import Container from '../ui/Container.jsx';
import TextTrainer from '../modules/TextTrainer/TextTrainer.jsx';

const Test = () => {
    useEffect(() => {
        document.title = 'KeyNinja - тренажер';
    }, []);

    return (
        <Container>
            <Header title="тренажер" />
            <TextTrainer />
        </Container>
    );
};

export default Test;
