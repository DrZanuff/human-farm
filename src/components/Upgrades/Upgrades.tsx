import { Button } from '@mui/material'
import { CurrencyExchange } from '@mui/icons-material'
import type { UpgradesProps } from './Upgrades.types'
import * as S from './Upgrades.styles'

export function Upgrades({ value }: UpgradesProps) {
  return (
    <S.UpgradesContainer>
      <Button variant="contained" endIcon={<CurrencyExchange />} size="small">
        Upgrades
      </Button>
    </S.UpgradesContainer>
  )
}
