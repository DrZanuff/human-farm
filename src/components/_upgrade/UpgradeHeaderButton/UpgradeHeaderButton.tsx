import { Button } from '@mui/material'
import { UpgradeScreenModal } from '../UpgradeScreen'
import { openModalSceneAtom } from '../../../globalAtoms'
import { useRecoilValue } from 'recoil'
import { CurrencyExchange } from '@mui/icons-material'
import * as S from './UpgradeHeaderButton.styles'

export function UpgradeHeaderButton() {
  const { openModal } = useRecoilValue(openModalSceneAtom)

  return (
    <S.UpgradeHeaderButtonContainer>
      <Button
        variant="contained"
        endIcon={<CurrencyExchange />}
        size="small"
        onClick={() => {
          openModal(<UpgradeScreenModal />)
        }}>
        Upgrades
      </Button>
    </S.UpgradeHeaderButtonContainer>
  )
}
