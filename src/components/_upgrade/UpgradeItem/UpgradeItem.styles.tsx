import { green, red } from '@mui/material/colors'
import styled from 'styled-components'

export const UpgradeItemContainer = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: left;
  gap: 20px;
  border: 1px solid green;
`

export const UpgrageItemHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 200px;
  align-items: center;

  h3 {
    color: black;
    margin: 0;
    width: 100%;
    padding-left: 20px;
    text-align: center;
  }
`

interface UpgradeButtonsContainerProps {
  disabled: boolean
}

export const UpgradeButtonsContainer = styled.div<UpgradeButtonsContainerProps>`
  display: flex;
  gap: 10px;
  padding: 5px;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 10px;
    color: ${({ disabled }) => (disabled === false ? green[600] : red[400])};
  }
`
