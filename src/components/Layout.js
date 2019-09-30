// Layout
import React from "react"
import styled from 'styled-components';

export default function Layout(props) {
    return (
        <ContainerTag>
            {props.children}
        </ContainerTag>
    )
}

const ContainerTag = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 30px;
`;