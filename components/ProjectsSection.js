import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"
import Header from "./Header"
import { MiddleWaveDecoration } from "./Decorations"

const GridSection = styled.section`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
	gap: 4.5rem;
    padding: 8rem 2rem 8rem 2rem;
`

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;

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

    &:hover {
        transform: scale(1.03);
        transition: 0.1s ease-in-out;
    }
`

const Card = ({ project }) => {
    return(
        <CardStyled>
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
            
            <Header>Recent Projects</Header>

            <MiddleWaveDecoration/>
            
            <GridSection>
                {projects.map(
                    p =>
                    <Card project={p} key={p.title}/>)}
            </GridSection>
        
        </Section>
    )
}

export default ProjectsSection