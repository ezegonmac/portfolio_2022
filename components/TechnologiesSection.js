import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardStyled = styled.div`
    background-color: darkblue;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    border: solid 0.3rem ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;

    & * {
        width: 60%;
        height: 60%;
    }

    &:hover {
        transform: scale(1.03);
        transition: 0.1s ease-in-out;
    }
`

const Card = ({ technology }) => {
    return(
        <CardStyled color={technology.color}>
                <Link href={technology.link}>
                    <FontAwesomeIcon icon={technology.icon} inverse/>
                </Link>
        </CardStyled>
    )
}

const TechnologiesSection = ({ technologies }) => {
    return(
        <Section variant={"SmallGrid"} background={"salmon"} header={"Technologies"}>
            {technologies.map(
                t => 
                <Card technology={t} key={t.name}/>)}
        </Section>
    )
}

export default TechnologiesSection