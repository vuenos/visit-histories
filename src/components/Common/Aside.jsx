import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const AsideSection = styled.div`
    width: 240px;
    border-right: 1px solid #cccccc;
`;

function Aside() {
    const asideData = [
        {
            title: "Main",
            path: "/"
        },
        {
            title: "Page1",
            path: "/page1"
        },
        {
            title: "Page2",
            path: "/page2"
        }
    ]

    return (
        <AsideSection>
            <ul>
                {
                    asideData.map((item, index) => (
                        <li key={`key-${index}`}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </AsideSection>
    );
}

export default Aside;