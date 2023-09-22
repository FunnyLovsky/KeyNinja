import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';

const Error = () => {
    useEffect(() => {
        document.title = 'KeyNinja - 404';
    }, []);

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>
                Sorry, the page you are looking for was not found. 404
            </h1>
            <Link to="/">
                <Button>Back to page</Button>
            </Link>
        </Container>
    );
};

export default Error;
