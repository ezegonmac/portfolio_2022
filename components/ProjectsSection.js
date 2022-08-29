import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"

const Header = styled.span`
    grid-column: 1 / -1;
    background-color: azure;
    font-size: 5em;
    font-weight: 900;
    transform: translateX(-4rem);
    display: flex;
    align-items: flex-end;
`

const CardStyled = styled.div`
    background-color: pink;
    overflow: hidden;

    & img {
        width: 100%;
    }
`

const Card = ({ project }) => {
    return(
        <CardStyled>
            <Link href={project.link}>
                <img src={project.img}></img>
            </Link>
        </CardStyled>
    )
}

const ProjectsSection = ({ projects }) => {

    return(
        <Section variant={"Grid"} background={"grey"}>
            <Header>Recent Projects</Header>
            {projects.map(
                p => 
                <Card project={p}/>)}
        </Section>
    )
}

export default ProjectsSection