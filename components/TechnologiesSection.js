import styled from "styled-components"
import Section from "./Section"
import Header from "./Header"
import { motion } from "framer-motion"
import TechnologyIcon from "./TechnologyIcon"
import { useModalContext } from "../context/TechnologyModalContext"

const SmallGridSection = styled.div`
    margin-top: 20px;
    position: relative; 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`

const SmallGrid = styled(motion.div)`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(1rem, 4rem));
	grid-auto-rows: clamp(3rem,4vw,6rem);
	gap: max(0.5em, 1vw);
    align-items: center;
    justify-items: center;
    padding-inline: clamp(0.1rem, 15%, 20rem);
    padding-block: 1rem 2rem;
`

const gridVariants = {
    visible: {
        transition: {
            when: "beforeChildren",
            delayChildren: 1,
            staggerChildren: 0.1,
        },
    },
    hidden: {
        transition: {
            when: "afterChildren",
            duration: 1,
            type: "spring",
        },
    },
}

const GridTitleStyled = styled(motion.h2)`
    position: relative;
    margin: 0;
    top: -20px;
    left: 5%;
    font-size: clamp(2rem, 8vw,5rem);
    color: var(--clr-5-dark);
    opacity: 70%;
    justify-self: end;
    margin-right: 10%;
    height: 100%;

    &:after {
        content: "";
        position: absolute;
        top: 18%;
        bottom: 5%;
        right: -45px;
        width: 2.5px;
        background-color: var(--white);
    }

    @media only screen and (max-width: 650px) {
        justify-self: start;
    }
`

const gridTitleVariants = {
    hidden: { 
        opacity: 0, 
        translateX: "200px",
    },
    visible: {
        opacity: 1,
        translateX: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
        }
    },
}

const CardStyled = styled(motion.div)`
    border: solid 0.2em white;
    background-color: ${props => props.color};
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 3px 3px 2px 0 rgb(100 100 100/ 20%);
    height: 100%;
    
    & a {
        display: grid;
        place-items: center;
        height: 100%;
    }

    & svg {
        width: 57%;
        height: 57%;
    }
    
    & img {
        width: 70%;
        height: 70%;
    }

`

const cardVariants = {
    hidden: { 
        opacity: 0, 
        rotate: "100deg"
    },
    visible: { 
        opacity: 1,
        rotate: 0, 
    },
}

const GridTitle = ({ children}) => {
    return(
        <GridTitleStyled
            variants={gridTitleVariants}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            >
            {children}
        </GridTitleStyled>
    )
}

const Card = ({ technology, ...props }) => {

    const {toggleModal, selectTechnology} = useModalContext()

    const handleClick = () => {
        selectTechnology(technology.name)
        toggleModal()
    }

    return(
        <CardStyled
            color={technology.color}
            variants={cardVariants}
            title={technology.name}
            {...props}
            >
                <a onClick={handleClick}>
                    <TechnologyIcon technology={technology}/>
                </a>
        </CardStyled>
    )
}

const TechnologiesSection = ({ technologyGroups }) => {
    return(
        <Section id={"technologies"} background={"var(--clr-5)"} >
                
            <Header>Technologies</Header>

            {
            Object.keys(technologyGroups).map(
                title => {
                    const array = technologyGroups[title]

                    return (
                        <SmallGridSection key={`div-${title}`}>
                            <GridTitle key={`title-${title}`} >{title}</GridTitle>
                            <SmallGrid
                                key={`grid-${title}`}
                                variants={gridVariants}
                                initial={"hidden"}
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                >

                                {array.map(
                                    technology =>

                                    <Card technology={technology} key={technology.name}/>
                                )}
                            </SmallGrid>
                        </SmallGridSection>
                    )
                }
            )}
        
        </Section>
    )
}

export default TechnologiesSection