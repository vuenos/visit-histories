import React from 'react';
import {Header, Aside} from './components/Common';
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentSection = styled.div`
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 65px);
`;

const Content = styled.div`
    width: calc(100% - 240px);
`;

function Layout() {
    return (
        <Wrapper>
            <Header />
            <ContentSection>
                <Aside />
                <Content>
                    <Outlet />
                </Content>
            </ContentSection>
        </Wrapper>
    );
}

export default Layout;