import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import Container from "../ui/Container.jsx";


const Error = () => {

    useEffect(() => {
        document.title = 'KeyNinja - 404';
    }, []);
    
    return(
        <Container>
            <h1 style={{textAlign: 'center'}}>Sorry, the page you are looking for was not found. 404</h1>
            <Link to='/'>Back to main page</Link>
        </Container>
    );
};

export default Error;