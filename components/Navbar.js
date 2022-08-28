import styled from "styled-components"
import Image from "next/dist/client/image"
import Link from "next/link"
import useWindowDimensions from "../hooks/useWindowDimensions"

const NavbarStyled = styled.div`
    background-color: red;
    color: white;
    display: flex;
    justify-content: space-between;
`

const LogoStyled = styled.div`
    background-color: green;
    display: flex;
`

const NavigationStyled = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
`

const NavLinkStyled = styled.li`
    background-color: yellow;
    font-weight: bold;
    width: max-content;
    display: flex;
    padding: 1.4em 2.4em 0.7em 2.4em ;

    & a {
        color: purple;
        padding: 3px;
        
        &:hover {
            color: white;
        }
    }
`

const NavLink = (props) => {
    return(
        <NavLinkStyled>
            <Link {...props}>
                {props.children}
            </Link>
        </NavLinkStyled>
    )
}

const Navigation = () => {
    return(
        <NavigationStyled>
            <NavLink href={"/"}>Welcome</NavLink>
            <NavLink href={"/biography"}>Biography</NavLink>
            <NavLink href={"/recentProjects"}>Recent Projects</NavLink>
            <NavLink href={"/technologies"}>Technologies</NavLink>
        </NavigationStyled>
    )
}

const Logo = () => {
    return(
        <LogoStyled>
            <Image src="/Logo.jpg" width={60} height={60}/>
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