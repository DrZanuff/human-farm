import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

const showAnimationContainer = keyframes`
  0% {  opacity: 0}
  100% { opacity: 1}
`
const showAnimationBackground = keyframes`
  0% {  opacity: 0}
  100% { opacity: 0.7}
`

export const ModalComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  z-index: 1002;

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  backdrop-filter: blur(2px);
  animation: ${showAnimationContainer} 0.8s;
`

export const ModalComponentContainerBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1001;

  background: #000000;
  opacity: 0.7;
  animation: ${showAnimationBackground} 0.8s;
`

interface ModalComponentProps {
  width?: string
  height?: string
}

export const ModalComponent = styled.div<ModalComponentProps>`
  padding: 15px 40px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: ${({ width }) => (width ? width : '85vw')};
  height: ${({ height }) => (height ? height : '80vh')};
  background-color: white;
  /* background-color: ${({ theme }) => theme.colors.WHITE}; */
  position: relative;

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);

  border-radius: 9px;

  @media (max-width: 1024px) {
    width: 90vw;
    height: 90vh;
  }
`
export const ModalComponentContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: gray;
    /* background-color: ${({ theme }) => theme.colors.GREY_LIGHT}; */
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    /* background-color: ${({ theme }) => theme.colors.PRIMARY}; */
    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: whitesmoke;
      /* background-color: ${({ theme }) => darken(0.05, theme.colors.PRIMARY)}; */
    }
  }
`
