import { motion } from "framer-motion"
import styled from "styled-components"
import useScrollIntoView from "../hooks/useScrollIntoView"
import useShrinkOnScroll from "../hooks/useShrinkOnScroll"
import useWindowDimensions from "../hooks/useWindowDimensions"

const NavbarStyled = styled(motion.div)`
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
    display: grid;
    place-items: center;
    aspect-ratio: 1;

    & img {
        width: 3.5em;
        height: 3.5em;
        min-width: 2.3rem;
        min-height: 2.3rem;
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
    padding: 1.5em 2.2rem 0.8em 2.3rem ;
    
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

    // disable nav for small devices
    const { width } = useWindowDimensions()
    const minWidth = 800

    const animate = useShrinkOnScroll()

    return(
        <NavbarStyled
            initial={{fontSize: "1rem"}}
            animate={animate}
            >
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