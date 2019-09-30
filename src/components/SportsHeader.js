// Header
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "./Layout.js"

export default function SportsHeader(props) {
    return (
        <SportsHeaderTag>
            <Layout>
                <ul>
                    <li><Link to="/sports/rugby">Rugby Union</Link></li>
                    <li><Link to="/sports/rugby">Football</Link></li>
                    <li><Link to="/sports/rugby">Rugby League</Link></li>
                </ul>
            </Layout>
        </SportsHeaderTag>
    )
}

const SportsHeaderTag = styled.div`
    background: #2f2f2f;
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        li {
            margin: 0;
            padding: 0;
            list-style-type: none;
            a {
                display: block;
                padding: 12px 12px 12px 40px;
                font-size: 14px;
                color: #ffffff;
                text-decoration: none;
                position: relative;
                transition: .15s ease-in-out;
                &::before {
                    content: '';
                    width: 16px;
                    height: 16px;
                    border: 1px solid #ffffff;
                    border-radius: 50%;
                    display: inline-block;
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:hover {
                    background-color: rgba(0,0,0,0.4);
                }
            }
        }
    }
`;