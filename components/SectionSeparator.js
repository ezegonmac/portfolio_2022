import styled from "styled-components"
import { motion } from "framer-motion"
import { forwardRef } from "react"

const SectionSeparatorWrapper = styled(motion.span)`
    height: ${props => props.variant.height + "px"};
    display: flex;
    overflow: hidden;
    background: ${props => props.variant.background};
    
    * {
        z-index: 2;
        transform: ${props => props.variant.transform};
    }
`

const SectionSeparator = forwardRef(({ type, ...props}, ref) => {
    
    const variants = {
        "Welcome" : {
            height: 110,
            background: "var(--white)",
            img: "/wave.svg",
            transform: "translateY(5px)"
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
            ref={ref}
            {...props}>
            { variant.img && <img src={variant.img} /> }
        </SectionSeparatorWrapper>
    )
})

export default SectionSeparator