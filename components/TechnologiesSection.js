import styled from "styled-components"
import Section from "./Section"
import Link from "next/link"
import Header from "./Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SmallGrid = styled.section`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(1rem, 4rem));
	grid-auto-rows: clamp(3rem,7vw,8rem);
	gap: max(0.5em, 5vw);
    padding-inline: clamp(0.1rem, 20%, 12rem);
    align-items: center;
    justify-items: center;
    padding-top: 5rem;
`

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
        <Section background={"var(--clr-5)"} >
                
            <Header>Technologies</Header>

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