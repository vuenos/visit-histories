import React from 'react';
import styled from "styled-components";

const HeaderSection = styled.div`
    display: flex;
    height: 64px;
    border-bottom: 1px solid #ccc;
    padding: 0 24px;
    justify-content: space-between;
    align-items: center;
`;

const LogoutButton = styled.button`
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 0;
    background-color: #FFFFFF;
    cursor: pointer;
`;

function Header() {
    return (
        <HeaderSection>
            <h1>Header</h1>
            <LogoutButton>Logout</LogoutButton>
        </HeaderSection>
    );
}

export default Header;