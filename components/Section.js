import styled from "styled-components"

const SectionStyled = styled.div`
    padding-inline: 16%;
    position: relative;
    background: ${props => props.background};
`

const Section = ({ children, background }) => {
    return(
        <SectionStyled background={background}>
            { children }
        </SectionStyled>
    )
}

export default  Section