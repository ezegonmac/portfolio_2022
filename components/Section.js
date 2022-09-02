import styled from "styled-components"
import { motion } from "framer-motion"

const SectionStyled = styled(motion.div)`
    padding-inline: 16%;
    position: relative;
    background: ${props => props.background};
    overflow: hidden;
`

const Section = ({ children, background, id, ...props }) => {
    return(
        <SectionStyled id={id} background={background} {...props}>
            { children }
        </SectionStyled>
    )
}

export default  Section