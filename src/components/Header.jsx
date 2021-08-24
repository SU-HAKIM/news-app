import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
    return (
        <HeaderStyle>
            <Nav>
                <Logo to="/">NEWS</Logo>
            </Nav>
        </HeaderStyle>
    )
}

export default Header

const HeaderStyle = styled.header`
    background:#005678;
    `

const Nav = styled.nav`
    padding:10px 0px;
    width:85vw;
    margin:0 auto;
`
const Logo = styled(Link)`
    font-size:1.5rem;
    font-weight:700;
    color:white;
    text-shadow:1px 2px 3px #000;
    text-decoration:none;
`