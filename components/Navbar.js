import { useEffect, useRef } from "react"
import styled from "styled-components"
import useWindowDimensions from "../hooks/useWindowDimensions"

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

const NavigationStyled = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 2.5rem;
    margin: 0;
`

const NavLinkStyled = styled.li`
    font-weight: bold;
    width: max-content;
    display: flex;
    padding: 1.4em 2.2em 0.7em 2.2em ;
    
    & a {
        color: var(--clr-2-light);
        text-transform: lowercase;
        padding: 5px;
        font-size: 1.1rem;
        
        &:hover {
            color: var(--clr-6);
        }
    }
`

const NavLink = ({ target, children }) => {

    const link = useRef()

    useEffect(() => {

        if(link.current) {
            link.current.addEventListener("click", (e) => {
                e.preventDefault()

                const element = document.getElementById(target)
                element.scrollIntoView({ behavior: "smooth" })

                console.log("hola")
            })
        }

    }, [])

    return(
        <NavLinkStyled>
            <a ref={link} >
                {children}
            </a>
        </NavLinkStyled>
    )
}

const Navigation = () => {
    return(
        <NavigationStyled>
            <NavLink target={"welcome"}>Welcome</NavLink>
            <NavLink target={"biography"}>Biography</NavLink>
            <NavLink target={"projects"}>Recent Projects</NavLink>
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