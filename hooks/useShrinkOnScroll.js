import { useState, useEffect } from "react"
import { useCycle, useScroll } from "framer-motion"

const useShrinkOnScroll = () => {
    const { scrollY } = useScroll()

    const [isFull, setIsFull] = useState(true)

    const [animate, cycle] = useCycle(
        {
            fontSize: "1rem",
        },
        {
            fontSize: "0.5rem",
            transition: {
                duration: 1,
            }
        }
    )

    useEffect(() => {
        return scrollY.onChange((latest) => {
            
            if(latest > 250 && isFull) {
                setIsFull(false)
                cycle(1)
            }
            if(latest < 200 && !isFull) {
                setIsFull(true)
                cycle(0)
            }
        })
    }, [isFull])

    return animate
}

export default useShrinkOnScroll