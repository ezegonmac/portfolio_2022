import styled from "styled-components"

const HeaderWrapper = styled.span`
    width: 100%;
    background-color: azure;
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 900;
    transform: translateX(-4rem);
    display: flex;
    align-items: flex-end;
    margin-inline: 1.5rem;

    & h1 {
        margin-bottom: 0;
    }

`

const Header = ({ text }) => {
    return(
        <HeaderWrapper>
            <h1>{ text }</h1>
        </HeaderWrapper>
    )
}

export default Header