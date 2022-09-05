import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TechnologyIcon = ({ technology }) => {
    return (
        technology.icon ? 
        <FontAwesomeIcon icon={technology.icon} inverse/> :
        <img src={technology.img}/>
    )
}

export default TechnologyIcon