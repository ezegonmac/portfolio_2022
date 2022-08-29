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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & img {
        width: 100%;
        max-height: 75%;
    }

    & p {
        width: 100%;
        text-align: end;
        color: magenta;
        margin: 0;
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
        <Section variant={"Grid"} background={"grey"}>
            <Header>Recent Projects</Header>
            {projects.map(
                p => 
                <Card project={p}/>)}
        </Section>
    )
}

export default ProjectsSection