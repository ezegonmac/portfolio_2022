import styled from "styled-components";

const SectionWrapper = styled.div`
    padding-inline: 12%;
    background-color: indigo;
`

const TwoColsSection = styled.section`
    background: ${props => props.background};
    display: grid;
    padding: 2em;
    min-height: 90vh;
    grid-template-columns: 1fr 1.618fr;
`

const Section = ({ variant, children, background }) => {

    const sections = {
        "TwoCols" : <TwoColsSection background={background}>{children}</TwoColsSection>,
    }

    return(
        <SectionWrapper>
            {sections[variant]}
        </SectionWrapper>
    )
}

export default Section