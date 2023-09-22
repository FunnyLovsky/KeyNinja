import React, { useEffect } from 'react';

import Header from '../ui/Header.jsx';
import Container from '../ui/Container.jsx';

const Color = () => {
    useEffect(() => {
        document.title = 'KeyNinja - цвет';
    }, []);

    return (
        <Container>
            <Header title="цвет" />
        </Container>
    );
};

export default Color;
