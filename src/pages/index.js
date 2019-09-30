// Index
import React from "react"
import "../styles/global.css"
import Layout from "../components/Layout.js"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import Results from "../components/Results.js"
import SportsHeader from "../components/SportsHeader.js"
import styled from 'styled-components';

// export default () => <div>Hello Tom!</div>

export default function Index(props) {
    return (
        <div>
            <section id="header">
                <Header />
                <SportsHeader></SportsHeader>
            </section>
            <Layout>
                <MainContent>
                    <Sidebar />
                    <Results />
                </MainContent>
            </Layout>
        </div>
    )
}

const MainContent = styled.section`
    display: flex;
`