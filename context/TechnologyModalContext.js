import React, { useContext, useState } from "react"
import useModal from "../hooks/useModal";

const ModalContext = React.createContext()

const useModalContext = () => {
    return useContext(ModalContext);
}

const TechnologyModalProvider = ({ children }) => {

    const [modalIsOpen, closeModal, toggleModal] = useModal()

    return(
        <ModalContext.Provider value={{modalIsOpen, closeModal, toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export { TechnologyModalProvider, useModalContext };
