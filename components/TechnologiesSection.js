import styled from "styled-components"
import Section from "./Section"
import Header from "./Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

const SmallGrid = styled(motion.div)`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(1rem, 4rem));
	grid-auto-rows: clamp(3rem,4vw,6rem);
	gap: max(0.5em, 1vw);
    padding-inline: clamp(0.1rem, 20%, 12rem);
    align-items: center;
    justify-items: center;
    padding-block: 3rem 0.1rem;
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

    &:hover {
        transform: scale(1.03);
        transition: 0.1s ease-in-out;
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

const Card = ({ technology }) => {
    return(
        <CardStyled 
            color={technology.color}
            variants={cardVariants} 

            >
                <a>
                    {
                        technology.icon ? 
                        <FontAwesomeIcon icon={technology.icon} inverse/>
                        :
                        <img src={technology.img}/>
                    }
                </a>
        </CardStyled>
    )
}

const TechnologiesSection = ({ technologyGroups }) => {
    return(
        <Section id={"technologies"} background={"var(--clr-5)"} >
                
            <Header>Technologies</Header>

            {
                technologyGroups.map( 
                    (group, i) => 

                    <SmallGrid key={i} variants={gridVariants}             initial={"hidden"}
                    whileInView={"visible"} 
                    viewport={{ once: true }}>
                        { 
                            group.map(
                                technology =>

                                <Card technology={technology} key={technology.name}/>
                            )}
                    </SmallGrid>
                )
            }
        
        </Section>
    )
}

export default TechnologiesSection