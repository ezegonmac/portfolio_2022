import styled from "styled-components"
import Header from "/components/Header.js"

const SectionWrapper = styled.div`
    padding-inline: 16%;
    background: ${props => props.background};
`

const TwoColsSection = styled.section`
    display: grid;
    min-height: 75vh;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

const Grid = styled.section`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
	grid-auto-rows: 8.5rem;
	gap: 5rem;
    padding: 3rem;
    `

const SmallGrid = styled.section`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
	grid-auto-rows: 6rem;
	gap: 3.5rem;
    padding-inline: 12rem;
    padding-block: 5rem;
`

const GridSection = ({ header, children }) => {
    return(
        <>
            <Header text={header}/>
            <Grid>{children}</Grid>
        </>
    )
}

const SmallGridSection = ({ header, children }) => {
    return(
        <>
            <Header text={header}/>
            <SmallGrid>{children}</SmallGrid>
        </>
    )
}

const Section = ({ variant, children, background, header }) => {
    const sections = {
        "TwoCols" : <TwoColsSection >{children}</TwoColsSection>,
        "Grid" : <GridSection header={header}>{children}</GridSection>,
        "SmallGrid" : <SmallGridSection header={header}>{children}</SmallGridSection>,
    }

    return(
        <SectionWrapper background={background}>
            {sections[variant]}
        </SectionWrapper>
    )
}

export default Section