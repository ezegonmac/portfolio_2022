import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"
import Header from "./Header"
import { MiddleWaveDecoration } from "./Decorations"
import { motion } from "framer-motion"
import Parallax from "./Parallax"

const GridSection = styled(motion.div)`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
	gap: 4.5rem;
    padding: 8rem 2rem 8rem 2rem;
`

const CardStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    cursor: pointer;

    & img {
        max-height: 75%;
        box-shadow: 4px 4px 1px 0 var(--clr-5-dark);
        border: solid 1px var(--clr-5);
        background-color: white;
        border-radius: 1px;
    }

    & p {
        width: 100%;
        text-align: end;
        color: var(--clr-5);
        margin: 0;
        padding-top: 1em;
        padding-right: 0.5em;
        font-weight: 500;
        font-size: 1.1rem;
    }
`

const cardVariants = {
    hidden: { 
        opacity: 0, 
        translateY: "20%"
    },
    visible: { 
        opacity: 1, 
        translateY: 0, 
        transition: {
            duration: 0.7
        }
    },
    hovered: {
        scale: 1.03,
        transition: {
            duration: 0.2,
            type: "spring",
        }
    }
}

const Card = ({ project }) => {
    return(
        <CardStyled 
            variants={cardVariants} 
            initial={"hidden"}
            whileInView={"visible"} 
            whileHover={"hovered"}
            viewport={{ once: true }}
            >
                <Link href={project.link}>
                    <img src={project.img}></img>
                </Link>
                <p>{project.title}</p>
        </CardStyled>
    )
}

const ProjectsSection = ({ projects }) => {

    return(
        <Section id={"projects"} background={"var(--clr-1)"} >
            
            <Header>Projects</Header>

            <MiddleWaveDecoration/>
            
            <GridSection>
                {projects.map(
                    p =>
                    <Parallax offset={80} stiffness={150} damping={150} key={p.title}>
                        <Card project={p} key={p.title}/>
                    </Parallax>
                )}
            </GridSection>
        
        </Section>
    )
}

export default ProjectsSection