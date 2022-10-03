import styled from '@emotion/styled';

const Overlay = styled.div` 
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
z-index: 1200;
`;

const ModalContent = styled.div` 
background-color: #ffffff;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 300px;
width: 500px;
`;

export {
    Overlay,
    ModalContent,
}
