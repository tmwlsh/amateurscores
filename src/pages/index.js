// Index
import React from "react"
import "../styles/global.css"
import Header from "../components/Header.js"
import styled from 'styled-components';

// export default () => <div>Hello Tom!</div>

export default function Index(props) {
    return (
        <div className="about-container">
            <Header></Header>
            <p>About me.</p>
        </div>
    )
}
