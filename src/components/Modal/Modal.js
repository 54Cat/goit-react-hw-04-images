import React from "react";
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from 'components/Modal/ModalStyled';

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
        return createPortal(

            <Overlay onClick={this.handleBackdropClick}>
                <ModalContent>
                    <h2>Hello</h2>
                    <button type='button' onClick={this.props.onClose}>close</button>
                
                    {/* <img src="" alt="" />                */}
                </ModalContent>
            </Overlay>,
            modalRoot
        );
    }
}
