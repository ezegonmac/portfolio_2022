import styled from "styled-components"

const SectionStyled = styled.div`
    padding-inline: 16%;
    position: relative;
    overflow: hidden;
    background: ${props => props.background};
`

const Section = ({ children, background, id }) => {
    return(
        <SectionStyled id={id} background={background}>
            { children }
        </SectionStyled>
    )
}

export default  Section