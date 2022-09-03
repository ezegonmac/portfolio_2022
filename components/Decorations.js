import styled from "styled-components"

const DecorationWrapper = styled.span`
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 34%;
`

export const MiddleWaveDecoration = () => {
    return(
        <DecorationWrapper>
            <img 
                src="/wave2.svg" 
                style={{ opacity: "16%" }}/>
        </DecorationWrapper>
    )
}