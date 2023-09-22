import React, { useEffect } from 'react';

import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import { Link } from 'react-router-dom';

const Main = () => {
    useEffect(() => {
        document.title = 'KeyNinja';
    }, []);

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Welcome the KeyNinja!</h1>
            <Link to="/test">
                <Button>Тренажер</Button>
            </Link>
        </Container>
    );
};

export default Main;
