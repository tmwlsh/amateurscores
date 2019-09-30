// Header
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/Layout.js"

export default function Header(props) {
    return (
        <HeaderTag>
            <Layout>
                <nav>
                    <Link className="logo" to="/">
                        <img src={'/main-logo.png'} alt="Logo" />
                    </Link>
                    <p>test</p>
                </nav>
            </Layout>
        </HeaderTag>
    )
}

const HeaderTag = styled.header`
    background: #5d5d5d;
    padding: 30px 0;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            padding: 0 10px;
            img {
                max-width: 200px;
            }
        }
    }
`;