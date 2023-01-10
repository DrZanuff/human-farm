import { IconButton } from '@mui/material'
import { MinimizeRounded, PlusOneRounded, BatteryChargingFullRounded } from '@mui/icons-material'
import type { UpgradeItemProps } from './UpgradeItem.types'
import * as S from './UpgradeItem.styles'

export function UpgradeItem({ cost, level, name }: UpgradeItemProps) {
  const energy = 100 // this will be an atom

  return (
    <S.UpgradeItemContainer>
      <S.UpgrageItemHeader>
        <h3>{name}</h3>
      </S.UpgrageItemHeader>
      <S.UpgradeButtonsContainer disabled={cost < energy}>
        <IconButton color="error" sx={{ border: '2px solid red' }} disabled={level <= 0}>
          <MinimizeRounded />
        </IconButton>

        <IconButton color="success" sx={{ border: '2px solid green' }} disabled={cost < energy}>
          <PlusOneRounded />
        </IconButton>

        <span>
          <BatteryChargingFullRounded /> {cost}
        </span>
      </S.UpgradeButtonsContainer>
    </S.UpgradeItemContainer>
  )
}
