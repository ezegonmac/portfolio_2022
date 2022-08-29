import styled from "styled-components"

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1.618fr;
    background-color: lightcoral;
    padding: 2em;
    min-height: 90vh;
`

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
    display: inline;
`

const Paragraph = styled.p`
    font-size: 1.2rem;
`

const WelcomeSection = () => {
    return(
        <Section>
            <ModelWrapper></ModelWrapper>
            <RightSection>
                <Header>
                    Hi, I am Ezequiel
                </Header>
                <Paragraph>
                    I am a enthusiastic software student finishing his carrer in Seville
                    I am currently trying to get better at react, creating web apps like this and some others shown down below
                </Paragraph>
            </RightSection>
        </Section>
    )
}

export default WelcomeSection