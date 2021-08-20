import React from 'react';
import { Styles, StylesContainer, StylesContainerHeader, Content, StylesFooter } from './styles';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {

    return (
        <Styles>
            <StylesContainerHeader>
                <Header />
            </StylesContainerHeader>
            <StylesContainer>
                <Sidebar />
                <Content>
                    <Outlet />
                </Content>
            </StylesContainer>
            <StylesFooter/>

        </Styles>
    );
}

export default Layout;