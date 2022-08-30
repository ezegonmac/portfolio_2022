import styled from "styled-components"
import Section from "./Section"

const TwoColsSection = styled.section`
    display: grid;
    min-height: 75vh;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

const ModelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 2rem;

    & img {
        width: clamp(5rem, 75%, 25rem);
    }
`

const RightSection = styled.div`
    grid-column: span 2;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: end;
`

const Header = styled.div`
    font-size: 5rem;
    font-weight: bold;
    line-height: 1em;
    display: inline;
    margin-bottom: 0.4em;
    color: var(--black);
    max-width: 5em;
`

const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.3em;
    color: var(--clr-3);
    max-width: 30em;
`

const WelcomeSection = () => {
    return(
        <Section background={"var(--white)"}>
            <TwoColsSection>

                <ModelWrapper>
                    <img src="/rubiks.png"/>
                </ModelWrapper>

                <RightSection>
                    <Header>
                        Hi, I am Ezequiel
                    </Header>
                    <Paragraph>
                        I am an enthusiastic software student finishing his career in Seville, Spain.
                        I am currently trying to get better at react, coding creative web apps like this and some others shown down below
                    </Paragraph>
                </RightSection>

            </TwoColsSection>
        </Section>
    )
}

export default WelcomeSection