import styled from 'styled-components'

export const UpgradeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: -webkit-fill-available;
  justify-content: center;
  h1 {
    color: black;
  }
`
export const UpgradeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
  width: 100%;
  height: fit-content;
  border: 1px solid greenyellow;
  padding: 5px;
`

export const UpgradeItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid green;
  gap: 15px;

  height: 100%;
  overflow-y: auto;
`
