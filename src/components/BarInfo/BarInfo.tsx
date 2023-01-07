import { Typography } from '@mui/material'
import { LinearBar } from '../LinearBar'
import type { BarInfoProps } from './BarInfo.types'
import * as S from './BarInfo.styles'

export function BarInfo({ value }: BarInfoProps) {
  return (
    <S.BarInfoContainer>
      <Typography>BarInfo</Typography>
      <LinearBar />
    </S.BarInfoContainer>
  )
}
