import { useEffect, useRef } from "react"

const useScrollIntoView = (target) => {
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

    return link
}

export default useScrollIntoView