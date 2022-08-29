import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & img {
        width: 100%;
        max-height: 75%;
        box-shadow: 4px 4px 0 0 var(--clr-5);
    }

    & p {
        width: 100%;
        text-align: end;
        color: var(--clr-5);
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
        <Section variant={"Grid"} background={"var(--clr-1)"} header={"Recent Projects"}>
            {projects.map(
                p => 
                <Card project={p} key={p.title}/>)}
        </Section>
    )
}

export default ProjectsSection