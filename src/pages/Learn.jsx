import React, { useEffect } from 'react';

import Header from '../ui/Header.jsx';
import Container from '../ui/Container.jsx';

const Learn = () => {
    useEffect(() => {
        document.title = 'KeyNinja - обучение';
    }, []);

    return (
        <Container>
            <Header title="обучение" />
        </Container>
    );
};

export default Learn;
