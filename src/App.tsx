import styled from 'styled-components';

import Main from "./components/main/Main";
import GetStarted from "./components/get-started/GetStarted";
import Footer from "./components/footer/Footer";


const AppContainer = styled.div``

const App = () => {
    return (
        <AppContainer>
            <Main />
            <GetStarted />
            <Footer />
        </AppContainer>
    );
};

export default App;
