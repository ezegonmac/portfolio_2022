import styled from "styled-components"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { motion, useScroll, useTransform } from "framer-motion"
import useScrollIntoView from "../hooks/useScrollIntoView"
import { useEffect } from "react"

const NavbarStyled = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    background-color: var(--white);
    color: white;
    display: flex;
    justify-content: space-between;
    z-index: 5;
    font-size: 1rem;
`

const LogoStyled = styled.div`
    display: flex;

    & img {
        width: 4em;
        height: 4em;
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

const NavLink = ({ targetId, children }) => {

    const link = useScrollIntoView(targetId)

    return(
        <NavLinkStyled 
            variants={linkVariants}>
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
            <NavLink targetId={"home"}>Home</NavLink>
            {/* <NavLink target={"biography"}>Biography</NavLink> */}
            <NavLink targetId={"projects"}>Projects</NavLink>
            <NavLink targetId={"technologies"}>Technologies</NavLink>
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