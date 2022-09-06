import React, { useContext, useState } from "react"
import useModal from "../hooks/useModal";

const ModalContext = React.createContext()

const useModalContext = () => {
    return useContext(ModalContext);
}

const TechnologyModalProvider = ({ children }) => {

    const [modalIsOpen, closeModal, toggleModal] = useModal()
    const [selectedTechnology, selectTechnology] = useState("React")

    return(
        <ModalContext.Provider value={{modalIsOpen, closeModal, toggleModal, selectedTechnology, selectTechnology}}>
            {children}
        </ModalContext.Provider>
    )
}

export { TechnologyModalProvider, useModalContext };
