import React from "react";
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, ModalImg } from 'components/Modal/ModalStyled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown) 
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown )
    }

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }      
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }      
    }

    render() {
        const { modalURL, alt } = this.props.content;

        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalContent>
                    <ModalImg src={modalURL} alt={alt} />
                </ModalContent>
            </Overlay>,
            modalRoot
        );
    }
}
