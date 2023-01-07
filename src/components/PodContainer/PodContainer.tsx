import { Pod } from '../Pod'
import { Typography } from '@mui/material'
import type { PodContainerProps } from './PodContainer.types'
import * as S from './PodContainer.styles'

export function PodContainer({ value }: PodContainerProps) {
  return (
    <S.PodContainerContainer>
      <Typography sx={{ padding: '10px 40px 10px' }}>PodContainer</Typography>
      <S.PodList>
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
        <Pod />
      </S.PodList>
    </S.PodContainerContainer>
  )
}
