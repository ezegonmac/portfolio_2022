import { useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    return [isOpen, close, toggle]
}

export default useModal