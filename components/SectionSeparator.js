import styled from "styled-components"
import { motion } from "framer-motion"
import { forwardRef } from "react"

const SectionSeparatorWrapper = styled(motion.span)`
    height: ${props => props.height + "px"};
    display: flex;
    overflow: hidden;
    background: ${props => props.background};
    
    * {
        z-index: 2;
    }
`

const SectionSeparator = forwardRef(({ type, ...props}, ref) => {
    
    const styles = {
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

    const style = styles[type]

    return(
        <SectionSeparatorWrapper 
            height={style.height} 
            background={style.background}
            ref={ref}
            {...props}>
            { style.img && <img src={style.img} /> }
        </SectionSeparatorWrapper>
    )
})

export default SectionSeparator