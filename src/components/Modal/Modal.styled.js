import styled from 'styled-components';

export const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;


export const OverlayStyled = styled.div`
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

  ::after {
    content: '';
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    width: 2em;
    height: 2em;
    background: url(https://basiclightbox.electerious.com/assets/images/close.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;



