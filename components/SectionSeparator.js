import styled from "styled-components"
import { motion } from "framer-motion"

const SectionSeparatorWrapper = styled.span`
    height: ${props => props.variant.height + "px"};
    display: flex;
    overflow: hidden;
    background: ${props => props.variant.background};
    
    * {
        z-index: 2;
    }
`

const SectionSeparator = ({ type, ...props}) => {
    
    const variants = {
        "Welcome" : {
            height: 110,
            background: "var(--white)",
            img: "/wave.svg",
        },
        "Technologies" : {
            height: 60,
            background: "var(--clr-5)",
        },
    }

    const variant = variants[type]

    return(
        <SectionSeparatorWrapper 
            variant={variant}
            {...props}>
            { variant.img && <img src={variant.img} /> }
        </SectionSeparatorWrapper>
    )
}

export default SectionSeparator