import { MotionConfig } from "framer-motion"
import styled from "styled-components"
import Section from "./Section"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionSeparator from "./SectionSeparator"
import { useRef } from "react"
import Parallax from "./Parallax"

const TwoColsSection = styled.section`
    display: grid;
    min-height: 75vh;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    padding-top: 3rem;
`

const ModelWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 2rem;
    max-width: 25rem;

    & img {
        width: clamp(5rem, 75%, 25rem);
    }
`

const modelWrapperVariants = {
    hidden: { 
        opacity: 0
    },
    visible: { opacity: 1, 
        transition: {
            duration: 0.7,
            delay: 1.8,
        }
    },
}

const RightSection = styled(motion.div)`
    grid-column: span 2;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: end;
`

const Header = styled(motion.div)`
    font-size: clamp(3.5rem, 10vw, 5rem);
    font-weight: bold;
    line-height: 1em;
    display: inline;
    margin-bottom: 0.4em;
    color: var(--black);
    max-width: 5em;
`

const Paragraph = styled(motion.p)`
    font-size: 1.2rem;
    line-height: 1.3em;
    color: var(--clr-3);
    max-width: 30em;
`

const rightSectionVariants = {
    hidden: {
        transition: {
            when: "afterChildren",
        },
    },
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
            delayChildren: 0.8
        },
    },
}

const textVariants = {
        hidden: { opacity: 0, translateY: "25%"},
        visible: { opacity: 1, translateY: 0, transition: {duration: 0.5}},
}

const HomeSection = () => {

    return(
        <>
            <Section id={"home"} background={"var(--white)"}>
                <Parallax offset={100}>
                <TwoColsSection>

                    <ModelWrapper
                        variants={modelWrapperVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <img src="/rubiks.png"/>
                    </ModelWrapper>

                    <RightSection
                        variants={rightSectionVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <Header
                            variants={textVariants}
                            >
                            Hi, I am Ezequiel
                        </Header>
                        <Paragraph
                            variants={textVariants}
                            >
                            I am an enthusiastic software student finishing his career in Seville, Spain.
                            I am currently trying to get better at react, coding creative web apps like this and some others shown down below
                        </Paragraph>
                    </RightSection>

                </TwoColsSection>
                </Parallax>
            </Section>
            
            <SectionSeparator type="Welcome"/>
        </>
    )
}

export default HomeSection