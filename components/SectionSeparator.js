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
            img: "/separator.jpg",
            height: 60,
            background: "var(--clr-1)",
            // background: "linear-gradient(0deg, var(--clr-1) 0%, rgba(255,255,255,1) 70%)",
        },
        "Projects" : {
            img: "/separator.jpg",
            height: 80,
            background: "var(--clr-1)",
        },
    }

    const style = styles[props.type]

    return(
        <SectionSeparatorWrapper height={style.height} background={style.background}>
            {/* <img src={style.img} /> */}
        </SectionSeparatorWrapper>
    )
}

export default SectionSeparator