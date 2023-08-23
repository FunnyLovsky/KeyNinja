import React, {useEffect} from "react";

import Header from "../ui/Header.jsx";
import Container from "../ui/Container.jsx";

const Setting = () => {

    useEffect(() => {
        document.title = 'KeyNinja - настройки';
    }, [])

    return(
        <Container>
            <Header title='настройки'/>
        </Container>

    );
};

export default Setting;