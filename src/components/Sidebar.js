// Sidebar
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/Layout.js"

export default function Sidebar(props) {
    return (
        <SidebarTag>
            <ul>
                <li><Link to="/sports/rugby/leagues/national-1">National 1</Link></li>
                <li><Link to="/sports/rugby/leagues/national-2">National 2</Link></li>
                <li><Link to="/sports/rugby/leagues/national-3">National 3</Link></li>
                <li><Link to="/sports/rugby/leagues/north-1-east">North 1 East</Link></li>
            </ul>
        </SidebarTag>
    )
}

const SidebarTag = styled.header`
    background: green;
    width: 130px;
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        li {
            margin: 0;
            padding: 0;
            list-style-type: none;
            a {
                padding: 8px 5px 8px 10px;
                display: block;
                font-size: 12px;
                text-decoration: none;
                color: #1c1c1c;
                &:hover {
                    background-color: rgba(0,0,0,0.4);
                }
            }
        }
    }
`;