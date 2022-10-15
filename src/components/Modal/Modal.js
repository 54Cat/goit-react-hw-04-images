import {useEffect} from "react";
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, ModalImg } from 'components/Modal/ModalStyled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({onClose, content}) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
        window.removeEventListener('keydown', handleKeydown);
        };
    });

    const handleKeydown = e => {
        if (e.code === 'Escape') {
            onClose();
        }      
    }

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }      
    }

        const { modalURL, alt } = content;

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalContent>
                    <ModalImg src={modalURL} alt={alt} />
                </ModalContent>
            </Overlay>,
            modalRoot
        );
    }
