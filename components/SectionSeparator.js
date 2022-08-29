import styled from "styled-components"

const SectionSeparatorWrapper = styled.span`
    height: ${props => props.height + "px"};
    display: flex;
    overflow: hidden;
`

const SectionSeparator = (props) => {
    
    const styles = {
        "Welcome" : {
            img: "/separator.jpg",
            height: 120,
        },
    }

    const style = styles[props.type]

    return(
        <SectionSeparatorWrapper height={style.height} >
            <img src={style.img} />
        </SectionSeparatorWrapper>
    )
}

export default SectionSeparator