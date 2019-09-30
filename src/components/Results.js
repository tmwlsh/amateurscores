// Sidebar
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

export default function Results(props) {
    return (
        <ResultsTag>
            <DateSelector>
                <p>30/10</p>
            </DateSelector>
        </ResultsTag>
    )
}

const ResultsTag = styled.div`
    background: blue;
    width: calc(100% - 200px);
`;

const DateSelector = styled.div`
    background: purple;
    p {
        margin: 0;
    }
`