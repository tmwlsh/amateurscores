// Header
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/Layout.js"

export default function Header(props) {
    return (
        <HeaderTag>
            <Layout>
                <Link className="logo" to="/">
                    <img src={'/main-logo.png'} alt="Logo" />
                </Link>
                <p>test</p>
            </Layout>
        </HeaderTag>
    )
}

const HeaderTag = styled.header`
    background: #3c3c3c;
    padding: 30px 0;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        img {
            max-width: 200px;
        }
    }
`;