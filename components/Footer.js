import styled from "styled-components"

const FooterStyled = styled.footer`
    background-color: var(--clr-1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    color: white;
`

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <FooterStyled>
            <small>&copy; Copyright {currentYear}, Ezequiel González Macho</small>
        </FooterStyled>
    )
}

export default Footer