import styled from "styled-components"
import Section from "./Section"
// import SectionWrapper from "./SectionWrapper"

// const Section = styled.section`
//     display: grid;
//     grid-template-columns: 1fr 1.618fr;
//     background-color: lightcoral;
//     padding: 2em;
//     min-height: 90vh;
// `

const ModelWrapper = styled.div`
    background-color: red;
    display: flex;
`

const RightSection = styled.div`
    background-color: aqua;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: end;
`

const Header = styled.div`
    font-size: 5rem;
    font-weight: bold;
    line-height: 1em;
    display: inline;
    margin-bottom: 0.4em;
    `

const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.3em;
`

const WelcomeSection = () => {
    return(
        <Section variant={"TwoCols"} background={"red"}>
            <ModelWrapper></ModelWrapper>
            <RightSection>
                <Header>
                    Hi, I am Ezequiel
                </Header>
                <Paragraph>
                    I am an enthusiastic software student finishing his career in Seville, Spain
                    I am currently trying to get better at react, coding creative web apps like this and some others shown down below
                </Paragraph>
            </RightSection>
        </Section>
    )
}

export default WelcomeSection