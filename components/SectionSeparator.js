import styled from "styled-components"

const SectionSeparatorWrapper = styled.span`
    height: ${props => props.height + "px"};
    display: flex;
    overflow: hidden;
    background: ${props => props.background};
`

const SectionSeparator = (props) => {
    
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

    const style = styles[props.type]

    return(
        <SectionSeparatorWrapper 
            height={style.height} 
            background={style.background}>
            { style.img && <img src={style.img} /> }
        </SectionSeparatorWrapper>
    )
}

export default SectionSeparator