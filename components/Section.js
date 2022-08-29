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

const GridSection = styled.section`
    background: ${props => props.background};
    display: grid;
    padding: 2em;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	grid-auto-rows: 10rem;
	gap: 5rem;
`

const Section = ({ variant, children, background }) => {

    const sections = {
        "TwoCols" : <TwoColsSection background={background}>{children}</TwoColsSection>,
        "Grid" : <GridSection background={background}>{children}</GridSection>,
    }

    return(
        <SectionWrapper>
            {sections[variant]}
        </SectionWrapper>
    )
}

export default Section