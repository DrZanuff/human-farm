import styled from 'styled-components'

export const PodContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const PodList = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  flex-wrap: wrap;
  height: 100%;
  max-width: 80vw;
  max-height: 300px;
  overflow-y: auto;
`
