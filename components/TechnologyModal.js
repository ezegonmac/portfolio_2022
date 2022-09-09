import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useModalContext } from "../context/TechnologyModalContext";
import TechnologyIcon from "./TechnologyIcon";

const BackdropStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000de;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    z-index: 10;
`
  
const ModalStyled = styled(motion.div)`
    width: clamp(50%, 700px, 90%);
    background-color: ${props => props.stylecolor};
    color: white;
    margin: auto;
    padding: 0 2rem;
    border-radius: 12px;
    overflow: hidden;
    z-index: 11;
`

const ModalHeaderStyled = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    
    & button {
        background-color: transparent;
        border: none;
        outline: none;
        height: 100%;
        color: white;
        z-index: 12;

        & * {
            height: 100%;
            aspect-ratio: 1;
        }
    }
`

const ModalBody = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(15rem, 90%), 1fr));
    margin-bottom: 20px;
    position: relative;
    min-height: 16em;

    & h2 {
        color: var(--white);
        max-height: 6em;
        opacity: 70%;
        font-size: clamp(1.5rem, 10vw, 6rem);
        writing-mode: vertical-rl;
        margin: 0;
        margin-right: auto;
        z-index: 12;
    }

    & p {
        font-size: 1.2rem;
        z-index: 12;
    }

    & svg ,
    & img {
        width: 50vh;
        height: 50vh;
        position: absolute;
        bottom: -30%;
        right: -15%;
        rotate: 20deg;
    }

    & svg {
        color: var(--black);
        opacity: 9%;
    }

    & img {
        filter: invert(1);
        opacity: 9%;
    }

    @media only screen and (max-width: 650px) {
        & h2 {
            writing-mode: horizontal-tb;
        }
    }
`

const ModalHeader = ({ handleClose }) => {
    return(
        <ModalHeaderStyled>
            <button onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        </ModalHeaderStyled>
    )
}

const Backdrop = ({ children, onClick }) => {

  return (
    <BackdropStyled
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropStyled>
  );
};

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
};

const TechnologyModal = ({ technologies }) => {

  const {closeModal, selectedTechnology} = useModalContext()

  const technology = Object.values(technologies).flat().filter(t => t.name == selectedTechnology)[0]

  return (
    <Backdrop onClick={closeModal}>
        <ModalStyled
          onClick={(e) => e.stopPropagation()}  
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"

          stylecolor={technology.color}
        >
          <ModalHeader handleClose={closeModal}/>
          <ModalBody>
              <h2>{technology.name}</h2>
              <p>{technology.description}</p>
              <TechnologyIcon technology={technology}/>
          </ModalBody>
        </ModalStyled>
    </Backdrop>
  )
};
  
export default TechnologyModal;