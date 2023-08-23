import React, {useEffect} from "react";

import Container from "../ui/Container.jsx";

const Main = () => {

    useEffect(() => {
        document.title = 'KeyNinja';
    }, []);
    
    return(
        <Container>
            <h1 style={{textAlign: 'center'}}>Welcome the KeyNinja!</h1>
        </Container>

    );
};

export default Main;