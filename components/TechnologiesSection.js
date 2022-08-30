import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"
import { SmallGrid } from "./Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardStyled = styled.div`
    border: solid 0.3em white;
    background-color: ${props => props.color};
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 3px 3px 2px 0 rgb(100 100 100/ 20%);
    height: 100%;

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
                    {
                        technology.icon ? 
                        <FontAwesomeIcon icon={technology.icon} inverse/>
                        :
                        <img src={technology.img}/>
                    }
                </Link>
        </CardStyled>
    )
}

const TechnologiesSection = ({ technologyGroups }) => {
    return(
        <Section 
            variant={"SmallGrid"} 
            background={"salmon"} 
            header={"Technologies"}
        >
            {
                technologyGroups.map( 
                    (group, i) => 
                    <SmallGrid key={i}>
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