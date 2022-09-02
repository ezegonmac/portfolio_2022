import { useEffect, useRef } from "react"
import styled from "styled-components"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { motion } from "framer-motion"

const NavbarStyled = styled.div`
    background-color: var(--white);
    color: white;
    display: flex;
    justify-content: space-between;
`

const LogoStyled = styled.div`
    display: flex;

    & img {
        width: 60px; 
        height: 60px;
    }
`

const NavigationStyled = styled(motion.ul)`
    list-style: none;
    display: flex;
    padding-right: 2.5rem;
    margin: 0;
`

const NavLinkStyled = styled(motion.li)`
    font-weight: bold;
    width: max-content;
    display: flex;
    padding: 1.5em 2.2em 0.8em 2.3em ;
    
    & a {
        color: var(--clr-2-light);
        text-transform: lowercase;
        padding: 2px;
        font-size: 1.1rem;
        cursor: pointer;
        
        &:hover {
            color: var(--clr-6);
        }
    }
`

const navigationVariants = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    hidden: {
        transition: {
            when: "afterChildren",
        },
    },
}

const linkVariants = {
    hidden: { opacity: 0, translateY: "20%"},
    visible: { opacity: 1, translateY: 0, transition: {duration: 0.7}},
}

const NavLink = ({ target, children }) => {

    const link = useRef()

    useEffect(() => {

        if(link.current) {
            link.current.addEventListener("click", (e) => {
                e.preventDefault()

                const element = document.getElementById(target)
                element.scrollIntoView({ behavior: "smooth" })
            })
        }

    }, [])

    return(
        <NavLinkStyled variants={linkVariants}>
            <a ref={link} >
                {children}
            </a>
        </NavLinkStyled>
    )
}

const Navigation = () => {
    return(
        <NavigationStyled 
            variants={navigationVariants}
            initial="hidden"
            animate="visible"
            >
            <NavLink target={"home"}>Home</NavLink>
            {/* <NavLink target={"biography"}>Biography</NavLink> */}
            <NavLink target={"projects"}>Projects</NavLink>
            <NavLink target={"technologies"}>Technologies</NavLink>
        </NavigationStyled>
    )
}

const Logo = () => {
    return(
        <LogoStyled>
            <img src="/Logo.jpg"/>
        </LogoStyled>
    )
}

const Navbar = () => {
    const { width } = useWindowDimensions()
    const minWidth = 800

    return(
        <NavbarStyled>
            <Logo/>
            { 
            width > minWidth ? 
                <Navigation/> :
                null 
            }
        </NavbarStyled>
    )
}

export default Navbar