import styled from "styled-components"

const HeaderWrapper = styled.span`
    width: 100%;
    font-size: clamp(1rem,5vw,3rem);
    font-weight: 900;
    transform: translateX(-4rem);
    display: flex;
    align-items: flex-end;
    margin-inline: 1.5rem;
    color: var(--white);
    z-index: 1;
    
    & h1 {
        margin-bottom: 0;
        text-shadow: 3px 3px 2px rgb(10 10 10 / 20%);
    }

`

const Header = ({ children }) => {
    return(
        <HeaderWrapper>
            <h1>{ children }</h1>
        </HeaderWrapper>
    )
}

export default Header