import { Upgrades } from '../Upgrades'
import { Typography } from '@mui/material'
import type { HeaderProps } from './Header.types'
import * as S from './Header.styles'

export function Header({ value }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <Typography>POD NUMBER - TIME 00:00</Typography>
      <h2>{value}</h2>
      <Upgrades />
    </S.HeaderContainer>
  )
}
